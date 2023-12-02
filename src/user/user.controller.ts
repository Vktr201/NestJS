import { Controller, Get, Post, Body, ConflictException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.enity';

@Controller('user')
export class UserController {
  UserService: any;
  constructor(private userRepository: UserService) {}
  @Get()
  findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }
  @Post()
  async create(@Body() createUserDto: User): Promise {
  try {
  await this.UserService.create(createUserDto);
  } catch (error) {
  if (error.code === '23505') {
  throw new ConflictException('User with this email already exists');
  }
  throw error;
  }
  }
  }
  @Get(':id')
  findOne(id, number): Promise {
    return this.userRepository.findOne(id);
  }
