import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Cat') private readonly userModel: Model<User>) {}
  private readonly users: User[] = [];

  async create(user: User) {
    const createdUser = new this.userModel(CreateUserDto);
    return await createdUser.save();
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id): User {
    return this.userModel.findOne(id)
  }
}
