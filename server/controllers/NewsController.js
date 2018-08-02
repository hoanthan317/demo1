var newsController = {};
const db = require('../db');
var News = require('../models/News');

newsController.getNews = function(req, res) {
    db.get().getConnection(function(err, connection){
        try {
            if(err) {
                console.log(err);
                res.json({
                    status: 500,
                    data: {}
                });
                return;
            }
            connection.query('select * from news', function(err, rows){
                if(err) {
                    console.log(err);
                    res.json({
                        status: 500,
                        data: {}
                    });
                    return;
                }
                res.json({
                    status: 200,
                    data: rows
                });
            });   
        } catch (error) {
            console.log(error);
            res.json({
                status: 500,
                data: {}
            });
        }
        finally{
            connection.release();
        }
    });
}

newsController.getById = function(req,res){
    try {
        var id = req.params.id;
        db.get().getConnection(function(err, connection){
            if(err) throw err;
            try{
                var query = "select * from news where id=" + id + " limit 1;";
                connection.query(query, function(err, row){
                    if(err) {
                        console.log(err);
                        res.json({
                            status: 500,
                            data: {}
                        });
                        return;
                    }
                    res.json({
                        status: 200,
                        data: row
                    });
                });
            }
            catch (error) {
                throw error
            }
            finally {
                connection.release();
            }
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
        db.get().getConnection(function(err,connection){
            try {
                if(err){
                    console.log(err);
                    res.json({
                        status: 500,
                        data: {}
                    });
                    return;
                }
                var query = "insert into news (title,teaser) values ('" + news.title + "','" + news.teaser + "');";
                connection.query(query, function(err, result){
                    if(err) {
                        console.log(err);
                        res.json({
                            status: 500,
                            data: {}
                        });
                    }
                    news.id = result.insertId;
                    res.json({
                        status: 200,
                        data: news
                    });
                });   
            } catch (error) {
                throw error
            }
            finally{
                connection.release();
            }
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