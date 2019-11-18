const Blog = require('../models/blog')

module.exports = {
   index
}


/*----render takes in a template and spits out html ----*/
function index(req, res) {
    const blogs = Blog.getAll()
    res.render('index', {blogs});
}