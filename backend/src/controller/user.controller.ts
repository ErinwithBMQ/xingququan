import { UserService } from '../service/user.service';
import { PostService } from '../service/post.service';
import { User } from '../entity/user.entity';
import { Body, Controller, Get, Inject, Post, Query } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { JwtService } from '@midwayjs/jwt';

@Controller('/user')
export class UserController {
  @Inject()
  userService: UserService;

  @Inject()
  ctx: Context;

  @Inject()
  jwtService: JwtService;

  @Inject()
  postService: PostService;

  @Post('/create_user')
  async create(@Body() user: User) {
    return await this.userService.createUser(user);
  }
  @Get('/find_user')
  async find(@Query('name') name: string) {
    const a = await this.userService.findUser(name);
    console.log('Found user in controller:', a);
    if (a === null) {
      return false;
    }
    return a.name;
  }

  @Post('/secret')
  async password(@Body() user: User) {
    const user2 = await this.userService.findUser(user.name);
    if (user2.secret === user.secret) {
      const token = await this.jwtService.sign({ username: user.name });
      return { token };
    }
    return false;
  }
  @Get('/get_name')
  async protectedRoute() {
    const token = this.ctx.request.header.authorization.split(' ')[1];
    try {
      this.ctx.state.user = await this.jwtService.verify(
        token,
        'YEONJUNBEOMGYU1399' // 确保这里使用的是正确的密钥
      );
      const username = this.ctx.state.user.username;
      return { username };
    } catch (error) {
      if (error) {
        this.ctx.status = 401;
        this.ctx.body = { error: 'Invalid token' };
      } else {
        this.ctx.status = 500;
        this.ctx.body = { error: 'Internal server error' };
      }
    }
  }

  @Get('/get_message')
  async get_message() {
    const token = this.ctx.request.header.authorization.split(' ')[1];
    try {
      this.ctx.state.user = await this.jwtService.verify(
        token,
        'YEONJUNBEOMGYU1399' // 确保这里使用的是正确的密钥
      );
      const username = this.ctx.state.user.username;
      const user = await this.userService.findUser(username);
      console.log(user);
      return { name: username, image_id: user.photo_id };
    } catch (error) {
      if (error) {
        this.ctx.status = 401;
        this.ctx.body = { error: 'Invalid token' };
      } else {
        this.ctx.status = 500;
        this.ctx.body = { error: 'Internal server error' };
      }
    }
  }

  @Get('/touxiang')
  async showTouxiang(@Query('name') name: string) {
    const a = await this.userService.findUser(name);
    console.log('Found user in controller:', a);
    if (a === null) {
      return false;
    }
    return a.photo_id;
  }

  @Get('/get_user_post')
  async get_user_post(@Query('name') name: string) {
    const a = await this.postService.getAllPostByPoster(name);
    console.log('Found user in controller:', a);
    return a;
  }
}
