const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String, required: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true } // slug gen từ name
    }, {
    timestamps: true, // tự tạo ra 2 field là createdAt
});

module.exports = mongoose.model('Course', Course); // tạo model Course từ schema Course
