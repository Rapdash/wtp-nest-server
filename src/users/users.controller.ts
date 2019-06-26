import { Controller, Post, Body, Get, UsePipes, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { User } from './interfaces/user.interface';
import { UserValidationPipe } from './pipes/user-validation.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new UserValidationPipe())
  async create(@Body() userDto: Promise<UserBodyDto>) {
    this.usersService.create(userDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findbyId(@Param('id') id): Promise<UserDto> {
    return this.usersService.findOne(id);
  }
}
