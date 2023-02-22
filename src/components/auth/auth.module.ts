import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../users/schemas/users.schema';
import { LocalStrategy } from './local.auth';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: {
        expiresIn: '60s'
      }
    }),
    MongooseModule.forFeature([{ name: 'user', schema: UserSchema }])
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
