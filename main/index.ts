
import { Application, Router, helpers } from 'https://deno.land/x/oak/mod.ts';
import models from './models/index.ts';
import routes from './routes/index.ts';

const port = 8000;
const app = new Application();

app.use(async (ctx,next)=>{
  ctx.state = {
    models,
    me: models.User.get('3'),// Simple user session/auth.
  }
  await next()
})

app.use(routes.courses.allowedMethods());
app.use(routes.courses.routes());

app.use(routes.users.allowedMethods());
app.use(routes.users.routes());

app.use(routes.coursedsaved.allowedMethods());
app.use(routes.coursedsaved.routes())


app.addEventListener('listen',()=> {
  console.log(`Listening on localhost:${port}`)
})

await app.listen({ port });