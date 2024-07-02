import { RequestRegisterFollow } from  '../entities/request-register-follower'


export class MapperRequestRegister {

    from(data: {user: string, friend: string}): RequestRegisterFollow {
        const registerFollower = new RequestRegisterFollow();
        registerFollower.follow = data.friend;
        registerFollower.user = data.user;
        return registerFollower;
    }
}