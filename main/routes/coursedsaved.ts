
// Route User 
import {Router, helpers} from 'https://deno.land/x/oak/mod.ts'

const router = new Router();
 
// GET ALL
router.get('/api/:user_id/coursesaved', (ctx)=> {
	const { user_id } = helpers.getQuery(ctx, {mergeParams:true})
  const course = Array.from(ctx.state.models.User.values())
	ctx.response.body = Array.from(ctx.state.models.CourseSaved.values())
})

// make it so that it only grabs only user signed on
export default router;
