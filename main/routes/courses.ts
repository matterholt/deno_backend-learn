
import {  Router, helpers } from 'https://deno.land/x/oak/mod.ts';
import {get_book_data} from '../utils/course_utils.ts'
const router = new Router();
// get all courses 
router.get('/api/courses', (ctx)=>{
  ctx.response.body = Array.from(ctx.state.models.Courses.values())
})

// put 
router.get('/api/courses/:courseId', (ctx)=>{
  const { courseId} = helpers.getQuery(ctx, { mergeParams: true})
  const course = ctx.state.models.Courses.get(courseId)
  const courseChapters = get_book_data(course.id,ctx.state.models.CoursesDetails)
  ctx.response.body = {...course,...courseChapters}
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

export default router;