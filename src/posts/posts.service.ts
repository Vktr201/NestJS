import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './posts.model';
import { PostDto } from './dto/post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private postsRepository: Repository<Posts>,
  ) {}

  findAll(): Promise<Posts[]> {
    return this.postsRepository.find();
  }

  async addPost(posts: PostDto): Promise<Posts> {
    const { avatar, description, title } = posts;
    try {
      const findPost = await this.postsRepository.findOne({
        where: { avatar, description, title },
      });
      if (Boolean(findPost)) {
        throw new BadRequestException({
          message: 'This post already exist',
        });
      }
      return this.postsRepository.save(posts);
    } catch (error) {
      throw new BadRequestException({
        errors: error.message,
      });
    }
  }
}
