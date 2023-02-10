import { Context } from 'koa'
import { Controller, Get } from 'amala'

@Controller('/')
export default class {
  @Get('/')
  async root(ctx: Context) {
    ctx.body = '<p>Cool cool cool cool, noice</p>>'
  }
}
