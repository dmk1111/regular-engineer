import { Context } from 'koa'
import { Controller, Get } from 'amala'

@Controller('/')
export default class {
  @Get('/')
  root(ctx: Context) {
    ctx.body = `
<h1>Welcome!</h1>
<p>Cool cool cool cool, noice</p>
`
  }
}
