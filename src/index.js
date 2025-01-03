const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes'); // tự động nạp file index.js trong thư mục routes
const db = require('./config/db');

// Connect to DB
db.connect();

// để lấy file từ trong public
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
); // middleware để lấy dữ liệu từ form data

app.use(express.json()); // gửi dữ liệu từ client lên server dưới dạng json

// HTTP logger
//app.use(morgan('combined'));

//Template engine
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
//__dirname là đường dẫn tuyệt đối của thư mục chứa file hiện tại
app.set('views', path.join(__dirname, 'resources', 'views'));

/*                                            get này hiểu là route, khi gõ / vào search box thì sẽ lao thẳng vào tin tức
app.get('/', (req, res) => {
  res.render('home');                         render home thì đưa home vào phần body trong main.handlebars
})

app.get('/news', (req, res) => {              '/news' là path, (req, res) => {...} là handler function
  console.log(req.query.q);                   req.query chứa thông tin query ở client gửi lên
  res.render('news');                         news.hbs
})                                            req chứa thông tin ứng dụng ở client gửi lên, res chứa thông tin server trả về cho client
                                              chỉ khi tuyến đường khớp, handler function mới được thực thi

app.get('/search', (req, res) => {
  res.render('search');
})

app.post('/search', (req, res) => {
  console.log(req.body);                      form data là .body ko phải .query, biến body tạo ra bởi thư viện trong express lưu trữ dữ liệu từ form data
  res.send('');
})

*/

// khởi tạo routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
