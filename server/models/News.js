const db = require('../db');

var News = function(id = null,title, teaser){
    this.id = id;
    this.title = title;
    this.teaser = teaser;
}

News.prototype.getAll = function(callback) {
    db.get().getConnection(function(err, connection){
        try {
            if(err) {
                console.log(err);
                callback(false);
                return;
            }
            connection.query('select * from news', function(err, rows){
                if(err) {
                    console.log(err);
                    callback(false);
                    return;
                }
                callback(rows);
            });   
        } catch (error) {
            console.log(error);
            callback(false);
        }
        finally{
            connection.release();
        }
    });
}

News.prototype.getById = function(id, callback){
    db.get().getConnection(function(err, connection){
        if(err) {
            console.log(err);
            callback(false);
            return;
        }
        try{
            var query = "select * from news where id=" + id + " limit 1;";
            connection.query(query, function(err, row){
                if(err) {
                    console.log(err);
                    callback(false);
                    return;
                }
                callback(row);
            });
        }
        catch (error) {
            console.log(error);
            callback(false);
        }
        finally {
            connection.release();
        }
    });
}

News.prototype.add = function (news, callback){
    db.get().getConnection(function(err,connection){
        try {
            if(err){
                console.log(err);
                callback(false);
                return;
            }
            var query = "insert into news (title,teaser) values ('" + news.title + "','" + news.teaser + "');";
            connection.query(query, function(err, result){
                if(err) {
                    console.log(err);
                    callback(false);
                    return;
                }
                news.id = result.insertId;
                callback(news);
            });   
        } catch (error) {
            console.log(error);
            callback(false);
        }
        finally{
            connection.release();
        }
    });
}

module.exports = News;