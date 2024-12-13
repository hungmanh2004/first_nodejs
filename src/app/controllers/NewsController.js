class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news'); // news.hbs trong views
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    }
}

module.exports = new NewsController; // tạo ra một đối tượng của NewsController và export ra ngoài để sử dụng