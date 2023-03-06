
// Route User 
import {Router, helpers} from 'https://deno.land/x/oak/mod.ts'

const router = new Router();

// GET ALL
router.get('/api/user/coursesaved', (ctx)=> {
	ctx.response.body = Array.from(ctx.state.models.CourseSaved.values())
})

// make it so that it only grabs only user signed on
export default router;
