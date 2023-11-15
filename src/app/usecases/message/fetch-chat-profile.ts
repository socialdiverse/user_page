import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';
import { MockService } from "src/app/helpers/mock.service";
import { ProfileUser } from "src/app/modules/message/types";

type ChatProfileRequest = {
    id: string;
}

export class FetchChatProfile {

    mock: ProfileUser

    constructor(public apiService: ApiService) {
        const mockService = new MockService();
        this.mock = {
            displayName: mockService._faker.person.fullName(),
            username: mockService._faker.person.firstName(),
            id: mockService._faker.string.nanoid(),
            avatarUrl: mockService._faker.image.avatar(),
            isOnline: mockService._faker.datatype.boolean()
        }
    }

    execute = (req: ChatProfileRequest): Promise<ProfileUser> => {
        const url = `${environment.domain}api/fetch-chat-profile/${req.id}`;
        return new Promise((resolve, reject) => {
            this.apiService.getWithToken(url).subscribe(
                {
                    next: resolve,
                    // error: reject,
                    error: () => {
                        resolve(this.mock)
                    }
                }
            );
        });
    };
}
