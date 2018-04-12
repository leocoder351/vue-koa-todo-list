const Koa = require('koa');
const Router = require('koa-router');
const json = require('koa-json');
const logger = require('koa-logger');
const bodyparser = require('koa-bodyparser');
const onerror = require('koa-onerror');
const static = require('koa-static');
const render = require('koa-ejs');
const path = require('path');
const app = new Koa();
const router = new Router();

onerror(app);
app.use(static(path.join(__dirname, 'public')));
app.use(bodyparser());
app.use(json());
app.use(logger());

app.use(async (ctx) => {
    let start = new Date();
    console.log(this);
});




/* 后台渲染页面相关，这里暂时不用 */
/*
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'template',
    viewExt: 'html',
    cache: false,
    debug: false
});

app.use( async (ctx) => {
    await ctx.render('index', {
        title: '哈哈',
        layout: false
    });
});
*/

app.on('error', (err, ctx) => {
    console.log(1111);
    console.log(err);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
