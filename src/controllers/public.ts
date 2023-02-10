import { Context } from 'koa'
import { Controller, Get } from 'amala'

@Controller('/')
export default class {
  @Get('/')
  root(ctx: Context) {
    ctx.body = `
      <h2>Welcome!</h2>
      <p>Cool cool cool cool, nice</p>
     `
  }
}
