
import { Application, Router, helpers } from 'https://deno.land/x/oak/mod.ts';

const port = 8000;
const app = new Application();
const router = new Router();


// get all courses 
router.get('/api/courses', (ctx)=>{
  ctx.response.body = 'Recieve a GET HTTP method'
})


// post a new course

router.post('/api/courses', (ctx)=>{
  ctx.response.body = 'Recieve a POST HTTP method'
})

// put 
router.put('/api/courses/:courseId', (ctx)=>{
  const { courseId} = helpers.getQuery(ctx, { mergePrams: true})
  ctx.response.body = `Recieve a PUT HTTP method update ${ctx.params.courseId}`
})

// delete 
router.delete('/api/courses/:courseId', (ctx)=>{
  const { courseId} = helpers.getQuery(ctx, { mergePrams: true})
  ctx.response.body = `recieve a delete http method remove ${ctx.params.courseId}`
})



app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen',()=> {
  console.log(`Listening on localhost:${port}`)
})

await app.listen({ port });