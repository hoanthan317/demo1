const express = require('express');
const router = express.Router();
const newsController = require('../controllers/NewsController');

router.get('/', function(req, res, next) {
  newsController.getNews(req,res);
});

router.get('/:id', function(req,res,next){
  newsController.getById(req,res);
});

router.post('/post', function(req,res,next){
  newsController.add(req,res);
});

module.exports = router;