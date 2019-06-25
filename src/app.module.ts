// Packages
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Middleware (not currently using any)

// Modules
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGOOSE_URI), UsersModule],
})
export class AppModule {}
