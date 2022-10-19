import { BaseModel } from 'sjs-base-model'
import TypeModel from 'models/generic/TypeModel'

export default class TypeResponseModel extends BaseModel {
  message = null
  data: TypeModel[] = []
  total = 0

  constructor(props: any) {
    super()
    this.update(props)
  }
  update(props: any) {
    super.update(props)
    if (props) {
      this.data = props.types.data
      this.total = props.types.total
    }
  }
}
