import HttpErrorResponseModel from './HttpErrorResponseModel'
import HttpUtility from './HttpUtility'
// import { toast } from 'react-toastify';
import userStore from 'stores/user'

export default class EffectUtility {
  static async getToModel(Model: any, endpoint: string, params: any) {
    const response = await HttpUtility.get(endpoint, params)
    return EffectUtility._restModelCreator(Model, response)
  }

  static async postToModel(
    Model: any,
    endpoint: string,
    data: any,
    headers: any
  ) {
    const response = await HttpUtility.post(endpoint, data, headers)
    return EffectUtility._restModelCreator(Model, response)
  }

  static async putToModel(
    Model: any,
    endpoint: string,
    data: any,
    headers: any
  ) {
    const response = await HttpUtility.put(endpoint, data, headers)
    return EffectUtility._restModelCreator(Model, response)
  }

  static jsonListToModal(Model: any, data: any) {
    return data.map((json: any) => new Model(json))
  }

  static _restModelCreator(Model: any, response: any) {
    if (response instanceof HttpErrorResponseModel) {
      // toast.error(response.message);
      if (response.status === 401 || response.status === 403) {
        // userStore.getState().logout()
      }
      return { success: false, data: response }
    }

    return {
      success: true,
      data: new Model(response.data.data)
    }
  }
}
