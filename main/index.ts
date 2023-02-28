
import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

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
router.put('/api/courses', (ctx)=>{
  ctx.response.body = 'Recieve a PUT HTTP method'
})

// delete 


router.delete('/api/courses', (ctx)=>{
  ctx.response.body = 'Recieve a DELETE HTTP method'
})



app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen',()=> {
  console.log(`Listening on localhost:${port}`)
})

await app.listen({ port });