import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly fullName: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly passwordHash?: string;
}
