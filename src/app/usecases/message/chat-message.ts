import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';

export type SendMessageRequest = {
  content: string;
  chatId: string;
  // reply message
  // messageRef?: string;
  files?: File[];
};

export type UpdateMessageRequest = Pick<
  SendMessageRequest,
  'content' | 'chatId' | 'files'
>;
export type DeleteMessageRequest = Pick<SendMessageRequest, 'chatId'>;
export type UnAttachFilesRequest = {
  chatId: string;
  fileIds: string[];
};

export class ChatMessage {
  constructor(public apiService: ApiService) {}
  //   sendMessage = (req: SendMessageRequest): Promise<any> => {

  sendPrivateMessage = (content: string, userId: string): Promise<any> => {
    const url = `${environment.domain}api/send-message`;
    // const formReq = new FormData();
    // formReq.append('content', req.content);
    // formReq.append('chatId', req.chatId);
    // if (req.messageRef) formReq.append('messageRef', req.messageRef)
    // if (req.files?.length) {
    //     req.files.forEach((file, index) => {
    //         formReq.append(`file${index}`, file)
    //     })
    // }

    return new Promise((resolve, reject) => {
      this.apiService
        .postWithToken(url, { content, receiverId: userId })
        .subscribe({
          error: reject,
          next: resolve,
        });
    });
  };

  sendGroupChatMessage = (content: string, chatId: string): Promise<any> => {
    const url = `${environment.domain}api/send-group-message`;
    // const formReq = new FormData();
    // formReq.append('content', req.content);
    // formReq.append('chatId', req.chatId);
    // if (req.messageRef) formReq.append('messageRef', req.messageRef)
    // if (req.files?.length) {
    //     req.files.forEach((file, index) => {
    //         formReq.append(`file${index}`, file)
    //     })
    // }

    return new Promise((resolve, reject) => {
      this.apiService.postWithToken(url, { content, chatId }).subscribe({
        error: reject,
        next: resolve,
      });
    });
  };

  updateMessage = (req: UpdateMessageRequest): Promise<any> => {
    const url = `${environment.domain}api/send-message`;
    const formReq = new FormData();
    formReq.append('content', req.content);
    formReq.append('chatId', req.chatId);
    if (req.files?.length) {
      req.files.forEach((file, index) => {
        formReq.append(`file${index}`, file);
      });
    }

    return new Promise((resolve, reject) => {
      this.apiService.postWithToken(url, formReq).subscribe({
        error: reject,
        next: resolve,
      });
    });
  };

  deleteMessage = (req: DeleteMessageRequest): Promise<any> => {
    const url = `${environment.domain}api/delete-message?${req.chatId}`;

    return new Promise((resolve, reject) => {
      this.apiService.deleteWithToken(url).subscribe({
        error: reject,
        next: resolve,
      });
    });
  };

  unAttachFiles = (req: UnAttachFilesRequest): Promise<any> => {
    const url = `${environment.domain}api/un-attach-files`;

    return new Promise((resolve, reject) => {
      this.apiService.postWithToken(url, req).subscribe({
        error: reject,
        next: resolve,
      });
    });
  };
}
