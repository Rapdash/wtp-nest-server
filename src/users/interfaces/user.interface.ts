import { Document } from 'mongoose';

export interface User extends Document {
  email: string;
  fullName: string;
  passwordHash: string;
}
