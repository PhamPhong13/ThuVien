// import thu vien
const express = require('express');
const cors = require('cors');

const app = express();

const Routerdongia = require('./app/routes/dongia.route');
const Routernguoidung = require('./app/routes/nguoidung.route');
const Routermuontra = require('./app/routes/muontra.route');
const Routernhanvien = require('./app/routes/nhanvien.route');
const Routernhaxuatban = require('./app/routes/nhaxuatban.route');
const Routersach = require('./app/routes/sach.route');

app.use(cors());
app.use(express.json());
app.use( "/api/dongia", Routerdongia );
app.use( "/api/nguoidung", Routernguoidung );
app.use( "/api/muontra", Routermuontra );
app.use( "/api/nhanvien", Routernhanvien );
app.use( "/api/nhaxuatban", Routernhaxuatban );
app.use( "/api/sach", Routersach );


app.get("/", (req, res) => { 
    res.json({
        message: "Hello World!"
    })
})

module.exports = app;
