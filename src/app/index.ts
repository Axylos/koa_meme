const Koa = require('koa');
const app = new Koa();

import { userRouter } from '../routes';
import { appRouter } from './app.routes';

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.use(appRouter.routes());
app.use(appRouter.allowedMethods());


/*
app.use(async ctx => {
  ctx.body = {
    msg: 'fuck off\n'
  };
});
*/


export default app; 
