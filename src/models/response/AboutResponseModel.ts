import { BaseModel } from 'sjs-base-model'
import AboutModel from 'models/generic/AboutModel'

export default class AboutResponseModel extends BaseModel {
  message = null
  data: AboutModel[] = []
  total = 0

  constructor(props: any) {
    super()
    this.update(props)
  }
  update(props: any) {
    super.update(props)
    if (props) {
      this.data = props.about.data
      this.total = props.about.total
    }
  }
}
