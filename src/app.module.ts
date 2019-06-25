// Packages
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Middleware (not currently using any)

// Config
import { MONGO_URI } from './config';

// Modules
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || MONGO_URI),
    UsersModule,
  ],
})
export class AppModule {}
