import { NestFactory } from '@nestjs/core';
import { Module } from '@nestjs/common';

import { UserControllerModule } from './module/user-followers/user.followers.module';
import { UserRepositoryModule } from './application/repositores/user.module'
import { MongoModule } from './infrastructer/database/mongo/mongo'



@Module({
  imports: [UserControllerModule, MongoModule],
  exports: [UserControllerModule, MongoModule]
})

class AppModule {}


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
