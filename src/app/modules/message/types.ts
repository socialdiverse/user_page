export type ChatItem = {
  id: string;
  avatarUrl: string;
  name: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadMessageCount: number;
  isOnline: boolean;
};

export type ChatList = Array<ChatItem>;

export type ProfileUser = {
  id: string;
  displayName: string;
  username: string;
  isOnline: boolean;
  avatarUrl: string;
};

export enum MediaType {
  Image = 'image',
  Audio = 'audio',
  Video = 'video',
  // add more
}

type MessageMedia = {
  sender: ProfileUser;
  type: MediaType;
  link: string;
  id: string;
};

export type MessageItem = {
  id: string;
  content: string;
  isMe: boolean;
  sender: ProfileUser;
  createdAt: Date | string;
  updatedAt: Date | string;
  replyRef?: MessageItem | null;
  mediaList: Array<MessageMedia>;
};

export type MessageList = Array<MessageItem>;
