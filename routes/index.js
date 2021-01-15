var express = require('express');
var router = express.Router();
let todoImport = require('../models/todo.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Unit 2 Assessment', todoImport });
});

router.post('/', function(req, res, next) {

  let newItem = req.body.todoItem
  console.log(newItem)
  todoImport.todos.push({todo: newItem, done: false})
  res.render('index', { title: 'Unit 2 Assessment', todoImport });
});

module.exports = router;
