import { Module } from '@nestjs/common';
import { RegisterFollow } from '../../domain/use-cases/register-follow';
import { CreateUser } from '../../domain/use-cases/create-user';
import { UnfollowUser } from '../../domain/use-cases/unfollow-user';
import { FollowersUser } from '../../domain/use-cases/followers-user';
import { FollowingUser } from '../../domain/use-cases/following-user'
import { Validate } from '../../domain/use-cases/validate-requests';
import { UserRepository } from '../../application/repositores/user';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../../domain/schemas/user';
import { FollowSchema } from '../../domain/schemas/follow';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }, , {name: 'Follow', schema: FollowSchema}])],
  providers: [Validate, RegisterFollow, UnfollowUser, FollowersUser, FollowingUser, CreateUser, UserRepository],
  exports: [Validate, RegisterFollow, UnfollowUser, FollowersUser, FollowingUser, CreateUser, UserRepository]
})

export class UserRepositoryModule {}

