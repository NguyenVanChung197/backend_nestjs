import { UserRoles } from './../enum/roles.enum';
import { Command, Positional } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { UsersService } from '../users.service';

@Injectable()
export class UserCommand {
  constructor(private readonly usersService: UsersService) {}

  @Command({
    command: 'create:user',
    describe: 'create a user rool admin'
  })
  async create() {
    await this.usersService.create({
      username: 'username',
      last_name: 'last name',
      first_name: 'first name',
      password: '12345678',
      email: 'chung123@gmail.com',
      role: UserRoles.Admin
    });
  }
}
