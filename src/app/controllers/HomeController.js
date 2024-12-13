class HomeController {
    // [GET] /news
    index(req, res) {
        res.render('home'); // home.hbs trong views
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('Chưa có gì đâu!');
    }
}

module.exports = new HomeController; // tạo ra một đối tượng của NewsController và export ra ngoài để sử dụng