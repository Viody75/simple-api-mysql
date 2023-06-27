const express = require('express');
const mysql = require('../iot_it_kal/services/database/mysql');
const app = express();
const port = 7575;

// Define your routes
app.get('/', (req, res) => {
    res.send('API IOT Server IT Kalimantan');
});

app.get('/server/:id', async (req, res) => {
    const serverSn = req.params.id;
    const resListAgent = await mysql.query(`SELECT * FROM server_information WHERE serial_number ="${serverSn}"`);
    res.json(resListAgent)
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});