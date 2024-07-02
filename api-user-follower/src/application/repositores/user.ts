import { Injectable } from '@nestjs/common';

import { RequestUnfollowUser } from '../../domain/entities/request-unfollow-user'
import { RequestCreateUser } from '../../domain/entities/request-create-user';

import { RequestRegisterFollow } from '../../domain/entities/request-register-follower';
import { UnfollowUser } from '../../domain/use-cases/unfollow-user';
import { RegisterFollow } from '../../domain/use-cases/register-follow';
import { FollowersUser } from '../../domain/use-cases/followers-user';
import { FollowingUser } from '../../domain/use-cases/following-user';
import { CreateUser } from 'src/domain/use-cases/create-user';
import { Validate } from 'src/domain/use-cases/validate-requests';

@Injectable()
export class UserRepository{
    constructor(   
        private readonly validate: Validate,
        private readonly createUserUseCase: CreateUser,
        private readonly registerFollowUseCase: RegisterFollow,
        private readonly unfollowUseCase: UnfollowUser,
        private readonly followersUseCase: FollowersUser,
        private readonly followinsUseCase: FollowingUser
    ){}


    async create(user: RequestCreateUser){
        await this.validate.createUser(user.user);
        return await this.createUserUseCase.execute(user);
    }

    async registerFollow(data: RequestRegisterFollow){
        await this.validate.registerFollow(data);
        return await this.registerFollowUseCase.execute(data);
    }

    async unfollow(data: RequestUnfollowUser){
        await this.validate.unfollowUser(data);
        return await this.unfollowUseCase.execute(data);
    }

    async followers(user: string, page: number){
        await this.validate.userExist(user);
        return await this.followersUseCase.execute(user, page);
    }

    async following(user: string, page: number){
        await this.validate.userExist(user);
        return await this.followinsUseCase.execute(user, page);
    }
}


