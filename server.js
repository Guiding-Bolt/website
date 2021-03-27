import { join } from 'https://deno.land/std@0.91.0/path/mod.ts'

import { Application, Router, send } from 'https://deno.land/x/oak/mod.ts'
import Homepage from './views/Homepage.jsx'

const port = 4000

const router = new Router()
router.get('/', Homepage)

const app = new Application()
app.use(router.routes())
app.use(router.allowedMethods())
app.use(async context => {
  try {
    await send(context, context.request.url.pathname, {
      root: join(Deno.cwd(), 'assets/'),
    })
  } catch (error) {
    console.error('Error loading file: ', context.request.url.pathname)
    context.throw(404)
  }
})

console.log(`Application running at ${port}`)
app.listen({ port })
app.addEventListener('error', error => console.log('Error: ', error))
