import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Cat') private readonly userModel: Model<User>) {}

  async create(userDto: UserDto): Promise<UserDto> {
    const createdUser = new this.userModel(userDto);
    const { fullName, email } = await createdUser.save();
    const createdUserDto = { fullName, email };
    return createdUserDto;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id): Promise<UserDto> {
    const { fullName, email } = await this.userModel.findById(id).exec();
    const userDto = { fullName, email };
    return userDto;
  }
}
