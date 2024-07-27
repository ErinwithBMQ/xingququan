import { Inject, Controller, Get, Query, Post, Body } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { PhotoService } from '../service/photo.service';
import { Photo } from '../entity/photo.entity';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  photoService: PhotoService;

  @Get('/get_user')
  async getUser(@Query('uid') uid) {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }

  @Post('/photo')
  async addPhoto(@Body() photo: Photo) {
    const ph = await this.photoService.addPhoto(photo);
    return { success: true, message: 'OK', data: ph };
  }
}
