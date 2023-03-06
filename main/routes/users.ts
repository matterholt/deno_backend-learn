// Route User 
import {Router, helpers} from 'https://deno.land/x/oak/mod.ts'

const router = new Router();

// GET ALL
router.get('/api/users', (ctx)=> {
	ctx.response.body = Array.from(ctx.state.models.User.values())
  // ctx.response.body = `PUT HTTP method on useruserIdresource`;
})


export default router;