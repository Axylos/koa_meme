import * as Router from 'koa-router';

export const userRouter = new Router();

userRouter.prefix('/user/')

userRouter.get('/', async (ctx) => {
  ctx.body = {
    msg: 'wat'
  };
});

