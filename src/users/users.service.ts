import { Injectable, Get } from '@nestjs/common';

interface User {
  fullName: string;
  email: string;
  passwordHash: string;
}

@Injectable()
export class UsersService {
  @Get()
  findAll(): User[]  {
    return [
      { fullName: 'Fritz Johnson', email: 'fritzj96@gmail.com', passwordHash: 'skafj;lkdjgksal' },
    ];
  }
}
