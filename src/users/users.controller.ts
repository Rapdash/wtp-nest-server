import { Controller, Post, Body, Get, UsePipes, Param, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { User } from './interfaces/user.interface';
import { UserValidationPipe } from './pipes/user-validation.pipe';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new UserValidationPipe())
  async create(@Body() createUserDto: CreateUserDto ) {
    const responseData = await this.usersService.create(createUserDto);
    return { responseData };
  }

  @Get()
  async findAll(): Promise<UserDto[]> {
    const usersDocArray = await this.usersService.findAll();
    return usersDocArray.map(({ email, fullName }) => {
      return { email, fullName };
    });
  }

  @Get(':id')
  async findbyId(@Param('id') id): Promise<UserDto> {
    const { email, fullName } = await this.usersService.findOne(id);
    return { email, fullName };
  }
}
