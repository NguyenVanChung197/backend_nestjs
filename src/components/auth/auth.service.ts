import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUser({ username });

    if (!user) {
      throw new NotAcceptableException('Could not find the user');
    }
    const passwordValid = await bcrypt.compare(password, user.password);

    if (user && passwordValid) {
      return user;
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, role: user.role };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }
}
