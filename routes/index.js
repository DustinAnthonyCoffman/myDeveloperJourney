/*index router is usually used to display homepage */

const express = require('express');  //import express
const router = express.Router();       //grab express router object
const model = require('../models/blog')   
const indexCtrl = require('../controllers/index')

router.get('/', indexCtrl.getAll)
//render(target, which is index.ejs, object)


module.exports = router             //export router for the server to use
