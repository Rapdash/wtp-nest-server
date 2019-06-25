// Packages
import { Module, MiddlewareConsumer } from '@nestjs/common';

// Middleware
import { LoggerMiddleware } from './middleware/logger.middleware';

// Modules
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('users');
  }
}
