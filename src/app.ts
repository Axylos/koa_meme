const Koa = require('koa');
const app = new Koa();
import { userRouter } from './routes';

console.trace('wat');
console.trace(userRouter);
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());


app.use(async ctx => {
  ctx.body = {
    msg: 'fuck off\n'
  };
});


export default app; 
