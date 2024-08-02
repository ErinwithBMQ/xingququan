import { Controller, Post, Inject, Body, Get, Query } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { PostService } from '../service/post.service';
import { PostEntity } from '../entity/post.entity';
import { Comment } from '../entity/comment.entity';

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
  @Get('/get_post_by_id')
  async getPostById(@Query('id') id: number) {
    return this.postService.getPostById(id);
  }

  @Post('/comment')
  async createCommet(@Body() comment: Comment) {
    return this.postService.createComment(comment);
  }

  @Get('/get_all_comment')
  async getAllComment(@Query('post_id') post_id: number) {
    return this.postService.getAllCommentByPost_id(post_id);
  }

  @Get('/get_comment_number')
  async getCommentById(@Query('id') id: number) {
    return (await this.postService.getAllCommentByPost_id(id)).length;
  }
}
