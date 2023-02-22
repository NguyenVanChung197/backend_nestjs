import { UserCommand } from './components/users/command/users.command';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from 'config/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './components/posts/posts.module';
import { UsersModule } from './components/users/users.module';
import { CommandModule } from 'nestjs-command';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config]
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    UsersModule,
    PostsModule,
    CommandModule
  ],
  controllers: [AppController],
  providers: [AppService, UserCommand]
})
export class AppModule {}
