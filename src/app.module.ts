// Packages
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

// Middleware (not currently using any)

// Modules
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
