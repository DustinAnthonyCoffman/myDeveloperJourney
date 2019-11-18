const Blog = require('../models/blog');

module.exports = {
    index
}

//show all the blogs
function index(req, res) {
    Blog.find({}, function(err, blogs){
        if(err) res.redirect('/'); //if we get an error send them to the home screen
        res.render('index', {blogs}); //tells our view engine to look to views/index

    })  //using mongoose to create, use a query object, pass in an empty query object, second arg is a callback function
}