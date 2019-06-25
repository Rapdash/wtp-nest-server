export class CreateUserDto {
  readonly fullName: string;
  readonly email: string;
  readonly passwordHash: string;
}