var con = require('../db/db');

var cobj = {
    getAll: function (req, res) {
        var query = "select * from post";
        con.query(query, function (err, row) {
            if (err) {
                res.send(err);
            }
            res.send(row);
        });

    },

    add: function (req, res) {
        var q = "insert into post(topic,heading,content) values(? , ? , ?)";
        var post = req.body;
        var values = [post.topic,post.heading,post.content];
        con.query(q, values, function (err, rows) {
            if (err) {
                res.send(err);
            }
            res.send(rows);
        }
        );
    }
}
module.exports = cobj;
