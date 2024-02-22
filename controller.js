'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi telah Berjalan",res)
};


// menampilkan
exports.tampil = function(req,res) {
    connection.query('SELECT * FROM riziq', function(error, rows, fileds){
        if(error){
                connection.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};