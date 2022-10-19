import { BaseModel } from 'sjs-base-model'

export default class TikTokModel extends BaseModel {
  id = ''
  img = ''
  alt = ''

  constructor(props: any) {
    super()
    this.update(props)
  }
}
