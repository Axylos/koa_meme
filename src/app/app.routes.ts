import * as Router from 'koa-router';

export const appRouter = new Router();

appRouter.prefix('/')

appRouter.get('/', async (ctx) => {
  ctx.body = {
    msg: 'hey there'
  };
});
