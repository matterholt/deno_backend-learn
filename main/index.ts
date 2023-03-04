
import { Application, Router, helpers } from 'https://deno.land/x/oak/mod.ts';

const port = 8000;
const app = new Application();
const router = new Router();


interface CourseBook{
  id : string,
  title: string,
  gradeLevel : string,
}


interface CourseChapter {
  id : string,
  subject : string,
  numberOfChapters : number
  bookId : number
}
//MOC data
const Courses = new Map<sting, CourseBook>();
const CoursesDetals = new Map<sting, CurseChapter>();
Courses.set(
  '1',{
    id: '1',
    tilte:"beginner math",
    gradeLevel: "2"
  },
)
Courses.set(
  '2',{
    id : '2',
    tilte: "beginner reading",
    gradeLeve:"3"
  }
 )
CoursesDetals.set(
  '1',{
    id:'10',
    subject: 'math',
    numberOfChapters : 20,
    bookId: '1'
  }
)

CoursesDetals.set(
  '2',{
    id:'20',
    subject: 'reading',
    numberOfChapters : 22,
    bookId: '2'
    
  }
)

// get all courses 
router.get('/api/courses', (ctx)=>{
  ctx.response.body = Array.from(Courses.values())
})


// put 
router.get('/api/courses/:courseId', (ctx)=>{
  const { courseId} = helpers.getQuery(ctx, { mergeParams: true})
  // ctx.response.body = `recieve a delete http method remove ${courseId}`o

  // send the chapter details as well with book,
  ctx.response.body = Courses.get(courseId)
})



// delete 
router.delete('/api/courses/:courseId', (ctx)=>{
  const { courseId} = helpers.getQuery(ctx, { mergePrams: true})
  ctx.response.body = `recieve a delete http method remove ${ctx.params.courseId}`
})

// post a new course
const ID = Deno.uid();
router.post('/api/courses', (ctx)=>{
  ctx.response.body = 'Recieve a POST HTTP method'
})


app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen',()=> {
  console.log(`Listening on localhost:${port}`)
})

await app.listen({ port });