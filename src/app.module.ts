import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './posts/posts.model';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'post',
      entities: [Posts],
      synchronize: true,
    }),
    PostsModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}