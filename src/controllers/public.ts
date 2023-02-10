import { Context } from 'koa'
import { Controller, Get } from 'amala'

@Controller('/')
export default class {
  @Get('/')
  root(ctx: Context) {
    return `
      <h2>Welcome!</h2>
      <p>Cool cool cool cool, nice</p>
     `
  }
}
