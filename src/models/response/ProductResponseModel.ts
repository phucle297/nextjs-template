import { BaseModel } from 'sjs-base-model'
import ProductModel from 'models/generic/ProductModel'

export default class ProductResponseModel extends BaseModel {
  message = null
  data: ProductModel[] = []
  total = 0

  constructor(props: any) {
    super()
    this.update(props)
  }
  update(props: any) {
    super.update(props)
    if (props) {
      this.data = props.products.data
      this.total = props.products.total
    }
  }
}
