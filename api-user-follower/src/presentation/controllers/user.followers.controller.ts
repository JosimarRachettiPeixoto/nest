import { Controller, Get, Post, Delete, Param, Body, Query } from '@nestjs/common';
import { MapperRequestRegister } from '../../domain/mappers/request-register-follower'
import { UserRepository } from '../../application/repositores/user'

@Controller()
export class UserController {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  @Post(':user/follow/:follow')
  async registerFollow(@Param('user') user, @Param('follow') follow ): Promise<Object> {
    return await this.userRepository.registerFollow({user: user, follow: follow});
  }

  @Post('user/create')
  async createUser(@Body() user ): Promise<Object> {
    return await this.userRepository.create(user);
  }

  @Delete(':user/unfollow/:follow')
  async unfollow(@Param('user') user, @Param('follow') follow): Promise<Object> {
    return await this.userRepository.unfollow({user: user, follow: follow});
  }
  
  @Get('followers/user/:user')
  async followers(@Param('user') user, @Query('page') page=0): Promise<Object> {
    return await this.userRepository.followers(user, Number(page));
  }

  @Get('following/user/:user')
  async following(@Param('user') user, @Query('page') page=0): Promise<Object> {
    return await this.userRepository.following(user, Number(page));
  }
}

