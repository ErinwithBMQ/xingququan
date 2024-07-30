import { Controller, Post, Inject, Body, Get, Query } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { PostService } from '../service/post.service';
import { PostEntity } from '../entity/post.entity';

@Controller('/post')
export class XqqController {
  @Inject()
  postService: PostService;

  @Inject()
  ctx: Context;

  @Post('/create')
  async createPost(@Body() post: PostEntity) {
    return this.postService.createPost(post);
  }

  @Get('/get_all_post')
  async getAllPost(@Query('xqq_id') xqq_id: number) {
    return this.postService.getAllPostByXqq_id(xqq_id);
  }
}
