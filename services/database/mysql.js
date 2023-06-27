const dbConn = require('./config');

async function query(query, params) {
    // EX query : SELECT * FROM apps ORDER BY id desc
    const qSql = function () {
        return new Promise(resolve => {
            dbConn.query(query, function (error, results) {
                if (error) {
                    console.log(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
    return await qSql();
}

async function queryInsert(query, data) {
    // query EX: INSERT INTO apps SET ?
    // EX params : form_data = {
    // key_1: value_1,
    // key_2: value_2,
    // key_3: value_3
    // }
    const qSql = function () {
        return new Promise(resolve => {
            dbConn.query(query, data, function (error, results) {
                if (error) {
                    console.log(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
    return await qSql();
}

async function queryUpdate(query, id, data) {
    // query EX : UPDATE apps SET ? WHERE id = 
    // EX params : form_data = {
    // key_1: value_1,
    // key_2: value_2,
    // key_3: value_3
    // }
    // id : int
    const qSql = function () {
        return new Promise(resolve => {
            dbConn.query(query + id, data, function (error, results) {
                if (error) {
                    console.log(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
    return await qSql();
}

module.exports = { query, queryInsert, queryUpdate };