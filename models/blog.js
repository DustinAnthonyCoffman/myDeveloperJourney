const mongoose = require('mongoose');
const Schema = mongoose.Schema;  //this is a mongoose class defined in the mongoose package, all classes are capitalized

const blogSchema = new Schema({   //create the schema format
    title: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true

    },
    published: {
        type: Date,
        default: function() {
            return new Date();
        }
    }

}, {timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);  //turn our model schema into a collection
