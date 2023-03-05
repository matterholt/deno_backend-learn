
import { Application, Router, helpers } from 'https://deno.land/x/oak/mod.ts';
import models from './models/index.ts';
import routes from './routes/index.ts';

const port = 8000;
const app = new Application();

app.use(async (ctx,next)=>{
  ctx.state = {
    models
  }
  await next()
})

app.use(routes.courses.allowedMethods());
app.use(routes.courses.routes())


app.addEventListener('listen',()=> {
  console.log(`Listening on localhost:${port}`)
})

await app.listen({ port });