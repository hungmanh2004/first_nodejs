// Nơi tìm tuyến đường dựa trên path
const newsRouter = require('./news.js');
const homeRouter = require('./home.js');
const othersRouter = require('./others.js');

function route(app) {

    app.use('/news', newsRouter); // app sử dụng path /news và truyền vào newsRouter

    app.use('/search', othersRouter);

    app.use('/', homeRouter);

}

module.exports = route;
