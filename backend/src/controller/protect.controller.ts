import { Controller, Get, Inject } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Controller('/protect')
export class ProtectController {
  @Inject()
  ctx: Context;
  @Get('/hello')
  async index() {
    return 'hello world';
  }
}
