var newsController = {};
var News = require('../models/News');

newsController.getNews = function(req, res) {
    var news = new News();
    news.getAll(function(result){
        if(result === false) {
            res.json({
                status: 500,
                data: {}
            });
            return;
        }
        res.json({
            status: 200,
            data: result
        });
    });
}

newsController.getById = function(req,res){
    try {
        var id = req.params.id;
        var news = new News();
        news.getById(id, function(result){
            if (result === false) {
                res.json({
                    status: 500,
                    data: {}
                });
                return;
            }
            res.json({
                status: 200,
                data: result
            });
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 500,
            data: {}
        });
    }
}

newsController.add = function(req,res){
    try {
        var news = new News(null, req.body.title, req.body.teaser);
        news.add(news, function(result){
            if(result === false) {
                res.json({
                    status: 500,
                    data: {}
                });
                return;
            }
            res.json({
                status: 200,
                data: result
            });
        });
    } catch (error) {
        console.log(error);
        res.json({
            status: 500,
            data: {}
        });
    }
}


module.exports = newsController;