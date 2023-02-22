import { UserRoles } from './../enum/roles.enum';
import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { UsersService } from '../users.service';
import hashPassWord from 'src/utils/hash-password';

@Injectable()
export class UserCommand {
  constructor(private readonly usersService: UsersService) {}

  @Command({
    command: 'create:user',
    describe: 'create a user rool admin'
  })
  async create() {
    const password = await hashPassWord('12345678');
    await this.usersService.create({
      username: 'username',
      last_name: 'last name',
      first_name: 'first name',
      password: password,
      email: 'chung123@gmail.com',
      role: UserRoles.Admin
    });
  }
}
