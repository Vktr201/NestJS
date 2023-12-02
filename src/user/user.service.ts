import {
    ConflictException,
  Injectable,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { User } from './user.enity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { create } from 'domain';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(@Param('id', new ParseIntPipe()) id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }
}
    async create(User, User); {
    const { email } = User;
    const find = await this.userRepository.findOne({ where: { email } });
    
    if (find) {
    throw new ConflictException('User with this email already exists');
    }
    
    const user = this.userRepository.create(User);
    await this.userRepository.save(user);
    }
    