const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// để lấy file từ trong public
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
//__dirname là đường dẫn tuyệt đối của thư mục chứa file hiện tại
app.set('views', path.join(__dirname, 'resources', 'views'));

//get này hiểu là route, khi gõ /trang-chu vào search box thì sẽ lao thẳng vào tin tức
app.get('/trang-chu', (req, res) => {
  res.render('home');//render home thì đưa home vào phần body trong main.handlebars
})

app.get('/tin-tuc', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})