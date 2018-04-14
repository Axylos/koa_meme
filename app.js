const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = {
    msg: 'fuck off\n'
  };
});

module.exports = app;

