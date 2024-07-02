import { Injectable, BadRequestException } from '@nestjs/common';
import { RequestRegisterFollow } from '../entities/request-register-follower'
import { InjectModel } from '@nestjs/mongoose';
import { Follow, FollowModel } from '../schemas/follow';
import { Model } from 'mongoose';

@Injectable()
export class RegisterFollow {
  constructor(@InjectModel('Follow') private readonly followDb: Model<Follow>) {}

  async execute(data: RequestRegisterFollow ):  Promise<Object> {
    const registerFollow = new FollowModel({ 
      user: data.user, 
      follow: data.follow,
      date: new Date(),
      isActive: true
    });
    const already_followed = await this.followDb.findOne({user: data.user, follow: data.follow});
    if(already_followed){
        await this.followDb.updateOne({user: data.user, follow: data.follow}, {$set:{isActive: true}});
    }else{
        await this.followDb.create(registerFollow);
    }
    
    return {"message": `${data.user} now following ${data.follow}.`};
  }
}
