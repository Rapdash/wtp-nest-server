// Packages
import { Module } from '@nestjs/common';

// Middleware (not currently using any)

// Modules
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
