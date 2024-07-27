import { Controller, Post, Inject, Body } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { XqqService } from '../service/xqq.service';
import { Xqq } from '../entity/xqq_entity';

@Controller('/xqq')
export class XqqController {
  @Inject()
  xqqService: XqqService;

  @Inject()
  ctx: Context;

  @Post('/create')
  async createXqq(@Body() xqq: Xqq) {
    return this.xqqService.createXqq(xqq);
  }
}
