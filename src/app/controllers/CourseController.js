const Course = require('../models/Course');

class CourseController {

    // [GET] /courses/:slug    vì slug động => dùng dạng param :slug
    show(req, res, next) {
    Course.findOne({ slug: req.params.slug }).lean()
        .then(course => {
            res.render('courses/show', { course });
        })
        .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    async store(req, res, next) {
        //res.json(req.body);  // dữ liệu nhận được từ form gửi từ client lên
        // chèn hình ảnh luôn dựa vào đường dẫn video
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`
        const course = new Course({ ...formData });
        await course.save()
            .then(() => res.redirect('/')) // chuyển hướng về trang chủ
            .catch(error => { });
    }
}



module.exports = new CourseController(); // tạo ra một đối tượng của NewsController và export ra ngoài để sử dụng
