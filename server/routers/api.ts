import Router from 'koa-router'
import DB from '../models/db'

interface resultType {
  insertedCount: number
  insertedId: string
  [k: string]: unknown
}

const router = new Router()

router
  .get('/', async (ctx) => {
    ctx.body = 'api接口'
  })
  .get('/catelist', async (ctx) => {
    const result = await DB.instance.find('user')
    ctx.body = {
      result: result
    }
  })
  .post('/addCart', async (ctx) => {
    // 处理函数
    const { title, desc, startDate, endDate, complete } = ctx.request.body
    const result = await DB.instance.insert('list', {
      title,
      desc,
      startDate,
      endDate,
      complete
    })
    if (!(result as resultType).insertedId) {
      ctx.body = {
        success: false,
        message: '增加数据失败'
      }
      return
    }
    ctx.body = {
      success: true,
      message: '增加数据成功'
    }
  })

export = router.routes()
