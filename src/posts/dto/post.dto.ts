import { IsString, IsNotEmpty } from 'class-validator';
export class PostDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly avatar: string;
}
