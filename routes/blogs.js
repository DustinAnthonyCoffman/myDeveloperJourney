/*-----this is the router for our blog manager page -------*/

const router = require('express').Router();
/*
this is the above syntax
const express = require('express');  import express
const router = express.Router();    grab express router object
*/


/* ---------this is the database ----------*/
const model = require('../models/blog')   



/*-----this is the link to our controller -----*/
const blogsCtlr = require('../controllers/blogs');

/* why is this / ? because we will eventually expand to this /blogs or /blogs/comments etc. 
we want to map this router to this controller*/
router.get('/', blogsCtrl.index);









module.exports = router