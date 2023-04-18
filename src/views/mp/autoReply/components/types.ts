// 消息类型（Follow: 关注时回复；Message: 消息回复；Keyword: 关键词回复）
// 作为tab.name，enum的数字不能随意修改，与api参数相关
export enum MsgType {
  Follow = 1,
  Message = 2,
  Keyword = 3
}

type ReplyType = 'text' | 'image' | 'voice' | 'video' | 'shortvideo' | 'location' | 'link'

export interface ReplyForm {
  // relation:
  id?: number
  accountId?: number
  type?: MsgType
  // request:
  requestMessageType?: ReplyType
  requestMatch?: number
  requestKeyword?: string
  // response:
  responseMessageType?: ReplyType
  responseContent?: string
  responseMediaId?: number
  responseMediaUrl?: string
  responseTitle?: string
  responseDescription?: number
  responseThumbMediaId?: string
  responseThumbMediaUrl?: string
  responseArticles?: any[]
  responseMusicUrl?: string
  responseHqMusicUrl?: string
}

export interface ObjData {
  type: ReplyType
  accountId?: number
  content?: string
  mediaId?: number
  url?: string
  title?: string
  description?: string
  thumbMediaId?: number
  thumbMediaUrl?: string
  articles?: any[]
  musicUrl?: string
  hqMusicUrl?: string
}
