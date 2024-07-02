import { Injectable } from '@nestjs/common';
import { RequestUnfollowUser } from '../entities/request-unfollow-user'
import { InjectModel } from '@nestjs/mongoose';
import { Follow, FollowModel } from '../schemas/follow';
import { Model } from 'mongoose';


@Injectable()
export class UnfollowUser {
   constructor(@InjectModel('Follow') private readonly followDb: Model<Follow>) {}

  async execute(data: RequestUnfollowUser):  Promise<Object> {
    await this.followDb.updateOne({user: data.user, follow: data.follow},{$set:{isActive: false}});
    return {"message": `${data.user} unfollow ${data.follow}`};
  }
}