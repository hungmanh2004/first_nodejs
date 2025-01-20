const Course = require('../models/Course');

class CourseController {

    // [GET] /courses/:slug    vì slug động => dùng dạng param :slug
    show(req, res, next) {
    Course.findOne({ slug: req.params.slug }).lean()
        .then(courses => {
            res.render('courses/show', { courses });
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
    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then(courses => res.render('courses/edit', { courses }))
            .catch(next);
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE] /courses/:id
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [POST] /courses/handle-form-actions
    handleFormActions(req, res, next) {
        switch(req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({mesage: 'Action is invalid!'});
        }
    }

}



module.exports = new CourseController(); // tạo ra một đối tượng của NewsController và export ra ngoài để sử dụng
