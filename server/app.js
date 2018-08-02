const express = require('express');
const newsRoutes = require('./routes/news');
const cors = require('cors');
const db = require('./db');
const bodyParser = require('body-parser');

let app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.options('*', cors());

app.use('/news', newsRoutes);

db.connect(db.MODE_PRODUCTION, function(err){
    if(err) {
        console.log(err);
        return;
    }
    else {
        db.get().getConnection(function(err, connection){
            if(err) {
                console.log(err);
                return;
            }
            connection.release();
            console.log('Connected to database');
            app.listen(PORT, function () {
                console.log(`Listening on port ${PORT}`);
            });
        });
    }
});