import { Injectable } from '@nestjs/common';
import { RequestCreateUser } from '../entities/request-create-user'
import { InjectModel } from '@nestjs/mongoose';
import { User, UserModel } from '../schemas/user';
import { Model } from 'mongoose';


@Injectable()
export class CreateUser {
   constructor(@InjectModel('User') private readonly userDb: Model<User>) {}

  async execute(requestCreate: RequestCreateUser):  Promise<Object> {
    let user = new UserModel({...requestCreate, create: new Date()})
    await this.userDb.create(user);
    return {"message": `${requestCreate.user} are sucessfully create.`};
  }
}