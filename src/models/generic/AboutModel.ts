import { BaseModel } from 'sjs-base-model'

export default class AboutModel extends BaseModel {
  id = ''
  title = ''
  desc = ''
  button = ''

  constructor(props: any) {
    super()
    this.update(props)
  }
}
