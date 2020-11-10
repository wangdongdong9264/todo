import Koa from 'koa'
import Router from 'koa-router'
import koaBodyparser from 'koa-bodyparser'
import db from './models/db'
import api from './routers/api'

const app = new Koa()
const router = new Router()

app.use(koaBodyparser())

router.get('/', async (ctx) => {
  const data = await db.instance.find('user')
  console.log(data)

  ctx.body = 'hello world'
})

router.use('/api', api)

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)

console.log('Server running on port 3000')
