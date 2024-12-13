class OthersController {
  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new OthersController(); // tạo ra một đối tượng của NewsController và export ra ngoài để sử dụng
