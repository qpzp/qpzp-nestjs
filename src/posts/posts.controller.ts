import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { CreatePostDto } from './posts.dto';

@Controller('posts')
export class PostsController {
  @Get()
  index(@Headers('authorization') headers) {
    console.log(headers);
    return [
      { title: 'yo,nest' },
    ];
  }

  @Get(':id')
  show(@Param() params) {
    return {
      title: `Post ${params.id}`,
    };
  }

  @Post()
  store(@Body() post: CreatePostDto) {
    console.log(post.title);
  }
}
