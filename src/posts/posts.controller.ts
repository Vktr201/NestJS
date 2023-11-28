import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from './posts.model';
import { PostDto } from './dto/post.dto';

@Controller('users')
export class PostsController {
  postsService: any;
  constructor(private usersService: PostsService) {}

  @Post()
  addPost(@Body() posts: PostDto): Promise<Posts> {
    return this.postsService.addPost(posts);
  }

  @Get()
  findAll(): Promise<Posts[]> {
    return this.postsService.findAll();
  }
}
