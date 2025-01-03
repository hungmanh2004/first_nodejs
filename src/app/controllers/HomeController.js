const Course = require('../models/Course');

class HomeController {
  // [GET] /news
  index(req, res, next) {
    Course.find({}).lean()         
      .then(courses => res.render('home', { courses })) // Nếu không có lỗi, trả về home.hbs và truyền vào một object chứa thông tin courses
      .catch(next);                           // Nếu có lỗi, xử lý lỗi và trả về một trạng thái lỗi hoặc thông báo
  }

  // [GET] /news/:slug
  show(req, res) {
    res.send('Chưa có gì đâu!');
  }
}

module.exports = new HomeController(); // tạo ra một đối tượng của NewsController và export ra ngoài để sử dụng
