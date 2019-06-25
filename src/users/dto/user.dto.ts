import { IsString } from 'class-validator';

export class UserDto {
  @IsString()
  readonly fullName: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly passwordHash?: string;
}
