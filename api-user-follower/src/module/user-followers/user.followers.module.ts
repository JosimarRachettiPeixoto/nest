import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../../domain/schemas/user';
import { FollowSchema } from '../../domain/schemas/follow';

import { UserController } from '../../presentation/controllers/user.followers.controller'
import { MapperRequestRegister } from '../../domain/mappers/request-register-follower'

import { UserRepositoryModule } from '../../application/repositores/user.module'


@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }, {name: 'follows', schema: FollowSchema}]), UserRepositoryModule],
  controllers: [UserController],
  providers: [MapperRequestRegister]
})
export class UserControllerModule {}
