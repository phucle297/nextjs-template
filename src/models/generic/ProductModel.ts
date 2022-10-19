import { BaseModel } from 'sjs-base-model'

export default class ProductModel extends BaseModel {
  id = ''
  bg = ''
  img = ''
  alt = ''

  constructor(props: any) {
    super()
    this.update(props)
  }
}
