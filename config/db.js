const mysql = require('mysql');

//bc2378c6b1596d:3d449b02@us-cdbr-east-04.cleardb.com/heroku_0143efdc9011200
const mysqlConnection = mysql.createConnection({
    host: '@us-cdbr-east-04.cleardb.com',
    user: 'bc2378c6b1596d',
    password: '3d449b02',
    database: 'heroku_0143efdc9011200',
    multipleStatements: true
});

mysqlConnection.connect(function(err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('Db is connected succesfully');
    }
});

module.exports = mysqlConnection;