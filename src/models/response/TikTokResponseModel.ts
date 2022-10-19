import { BaseModel } from 'sjs-base-model'
import TikTokModel from 'models/generic/TiktokModel'

export default class TikTokResponseModel extends BaseModel {
  message = null
  data: TikTokModel[] = []
  total = 0

  constructor(props: any) {
    super()
    this.update(props)
  }
  update(props: any) {
    super.update(props)
    if (props) {
      this.data = props.tiktok.data
      this.total = props.tiktok.total
    }
  }
}
