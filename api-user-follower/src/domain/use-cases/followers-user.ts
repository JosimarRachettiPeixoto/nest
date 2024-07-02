import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Follow } from '../schemas/follow';
import { Model } from 'mongoose';


@Injectable()
export class FollowersUser {
   constructor(@InjectModel('Follow') private readonly followDb: Model<Follow>) {}

  async execute(user: string, page: number):  Promise<Object> {
    const skip = page !== 0 ?  10 * (page-1) : page;
    const followers = await this.followDb.find({follow: user, isActive: true}).lean().limit(10).skip(skip);
    return {"followers": followers};
  }
}