const mysql = require('mysql');

let dbConnect;

let db_config = {
    host: 'localhost',
    port: 8889, // 3306
    user: 'root', // boredvio
    password: 'root',
    database: 'db_iot_it_kalimantan',
    // socketPath: '/var/run/mysqld/mysqld.sock',
};

dbConnect = mysql.createConnection(db_config);

dbConnect.connect(function (err) {
    if (!!err) {
        console.log(err);
    } else {
        console.log('Connected to DB!');
    }
});

function handleDisconnect() {
    dbConnect = mysql.createConnection(db_config);
    dbConnect.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000);
        }
    });
    dbConnect.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
}

handleDisconnect();

module.exports = dbConnect;