import Koa from 'koa'
import Router from 'koa-router'

import db from './models/db'

const app = new Koa()
const router = new Router()

router.get('/', async (ctx) => {
  const data = await db.instance.find('user')
  console.log(data)

  ctx.body = 'hello world'
})

app.use(router.routes())
app.listen(3000)

console.log('Server running on port 3000')
