import AboutTypeModel from 'models/generic/AboutTypeModal'
import { BaseModel } from 'sjs-base-model'

export default class AboutTypeResponseModel extends BaseModel {
  message = null
  data: AboutTypeModel[] = []
  total = 0

  constructor(props: any) {
    super()
    this.update(props)
  }
  update(props: any) {
    super.update(props)
    if (props) {
      this.data = props.aboutTypes.data
      this.total = props.aboutTypes.total
    }
  }
}
