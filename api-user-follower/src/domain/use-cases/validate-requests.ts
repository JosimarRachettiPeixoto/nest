import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { RequestRegisterFollow } from '../entities/request-register-follower';
import { RequestUnfollowUser } from '../entities/request-unfollow-user'
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schemas/user';
import { Follow } from '../schemas/follow';
import { Model } from 'mongoose';


@Injectable()
export class Validate {
    constructor(@InjectModel('User') private readonly userDb: Model<User>,
                @InjectModel('Follow') private readonly followDb: Model<Follow>) {}

    async #getUser(user: string){
        return await this.userDb.findOne({user: user}).lean().exec();
    }

    async createUser(user: string): Promise<void> {
        const userData = this.#getUser(user);
        if(userData){
          throw new BadRequestException({message: "user already register."})
        }
        return
    }

    async registerFollow(register: RequestRegisterFollow ): Promise<void> {
      const userExist = await this.#getUser(register.user);
      if(!userExist){
          throw new NotFoundException({message: "user dont found."})

      }
      const followExist = await this.#getUser(register.follow);
      if(!followExist){
          throw new NotFoundException({message: "user try to follow dont found."})

      }
      const alreadyFollow = await this.followDb.findOne({user: register.user, follow: register.follow, isActive: true}).lean().exec();
      if(alreadyFollow){
        throw new BadRequestException({message: `already follow ${register.follow}`}); 
      }
    }

    async unfollowUser(register: RequestUnfollowUser): Promise<void> {
      const userExist = await this.#getUser(register.user);
      if(!userExist){
          throw new NotFoundException({message: "user dont found."})

      }
      const followExist = await this.#getUser(register.follow);
      if(!followExist){
          throw new NotFoundException({message: "user try to unfollow dont found."})
      }
    }

    async userExist(user: string){
      const userExist = await this.#getUser(user);
      if(!userExist){
          throw new NotFoundException({message: "user dont found."})
      }
    }

}