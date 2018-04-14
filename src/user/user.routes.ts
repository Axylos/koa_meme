import * as Router from 'koa-router';

const userRouter = new Router();
userRouter.get('/', async (ctx) => {
  ctx.body = 'hey there';
});

export default userRouter;
