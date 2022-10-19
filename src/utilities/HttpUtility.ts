import axios from 'axios'
import HttpErrorResponseModel from './HttpErrorResponseModel'
import userStore from 'stores/user'
// import MockAdapter from "axios-mock-adapter";
// import { baseApi } from 'environment';

// Mockup data
// import mockData from 'data';
// var mock = new MockAdapter(axios);
// for (const [key, value] of Object.entries(mockData)) {
//     if (value.get) {
//         mock.onGet(`${baseApi}${key}`).reply(200, value.get);
//     }
// }

const RequestMethod = {
  Get: 'GET',
  Post: 'POST',
  Put: 'PUT',
  Delete: 'DELETE',
  Options: 'OPTIONS',
  Head: 'HEAD',
  Patch: 'PATCH'
}

export default class HttpUtility {
  static async get(endpoint: any, params: any, requestConfig?: any) {
    const paramsConfig = params ? { params } : undefined

    return HttpUtility._request(
      {
        url: endpoint,
        method: RequestMethod.Get
      },
      {
        ...paramsConfig,
        ...requestConfig
      }
    )
  }

  static async post(endpoint: any, data: any, headers: any) {
    const config = data ? { data, headers } : undefined

    return HttpUtility._request(
      {
        url: endpoint,
        method: RequestMethod.Post
      },
      config
    )
  }

  static async put(endpoint: any, data: any, headers: any) {
    const config = data ? { data, headers } : undefined

    return HttpUtility._request(
      {
        url: endpoint,
        method: RequestMethod.Put
      },
      config
    )
  }

  static async delete(endpoint: any) {
    return HttpUtility._request({
      url: endpoint,
      method: RequestMethod.Delete
    })
  }

  static async _request(restRequest: any, config?: any) {
    if (!Boolean(restRequest.url)) {
      console.error(
        `Received ${restRequest.url} which is invalid for a endpoint url`
      )
    }

    try {
      const axiosRequestConfig = {
        ...config,
        method: restRequest.method,
        url: restRequest.url,
        headers: {
          'Content-Type': config?.headers?.['Content-Type']
            ? config.headers['Content-Type']
            : 'application/json',
          // @ts-ignore
          Authorization: userStore.getState()?.accessToken
            ? // @ts-ignore
              'Bearer ' + userStore.getState()?.accessToken
            : '',
          ...config?.headers
        }
      }

      const [axiosResponse] = await Promise.all([
        axios(axiosRequestConfig),
        HttpUtility._delay()
      ])

      const { status, data, request } = axiosResponse

      if (data.success === false) {
        return HttpUtility._fillInErrorWithDefaults(
          {
            status,
            message: data.errors.join(' - '),
            errors: data.errors,
            url: request ? request.responseURL : restRequest.url,
            raw: axiosResponse
          },
          restRequest
        )
      }

      return {
        ...axiosResponse
      }
    } catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        const { status, statusText, data } = error.response
        const errors =
          data && data.hasOwnProperty('errors')
            ? [statusText, ...data.errors]
            : [statusText]

        return HttpUtility._fillInErrorWithDefaults(
          {
            status,
            message: errors.filter(Boolean).join(' - '),
            errors,
            url: error.response.config.url,
            raw: error.response
          },
          restRequest
        )
      } else if (error.request) {
        // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
        const { status, statusText, responseURL } = error.request

        return HttpUtility._fillInErrorWithDefaults(
          {
            status,
            message: statusText,
            errors: [statusText],
            url: responseURL,
            raw: error.request
          },
          restRequest
        )
      }

      // Something happened in setting up the request that triggered an Error
      return HttpUtility._fillInErrorWithDefaults(
        {
          status: 0,
          message: error.message,
          errors: [error.message],
          url: restRequest.url,
          raw: error
        },
        restRequest
      )
    }
  }

  static _fillInErrorWithDefaults(error: any, request: any) {
    const model = new HttpErrorResponseModel()

    model.status = error.status || 0
    model.message = error.message || 'Error requesting data'
    model.errors = error.errors.length
      ? error.errors
      : ['Error requesting data']
    model.url = error.url || request.url
    model.raw = error.raw

    // Remove anything with undefined or empty strings.
    model.errors = model.errors.filter(Boolean)

    return model
  }

  /**
   * We want to show the loading indicator to the user but sometimes the api
   * request finished too quickly. This makes sure there the loading indicator is
   * visual for at least a given time.
   *
   * @param duration
   * @returns {Promise<unknown>}
   * @private
   */
  static _delay(duration = 250) {
    return new Promise(resolve => setTimeout(resolve, duration))
  }
}
