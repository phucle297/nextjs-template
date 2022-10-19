import { BaseModel } from 'sjs-base-model'

export default class AboutTypeModel extends BaseModel {
  id = ''
  img = ''
  imgHover = ''
  char = ''
  charHover = ''
  title = ''
  desc = ''
  alt = ''

  constructor(props: any) {
    super()
    this.update(props)
  }
}
