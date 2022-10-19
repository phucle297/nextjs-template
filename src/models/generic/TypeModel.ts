import { BaseModel } from 'sjs-base-model'

export default class TypeModel extends BaseModel {
  id = ''
  bg = ''
  img = ''
  imgHover = ''
  alt = ''

  constructor(props: any) {
    super()
    this.update(props)
  }
}
