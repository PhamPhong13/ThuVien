// import thu vien
const express = require('express');
const cors = require('cors');

const app = express();

// router
const Routerdongia = require('./app/routes/dongia.route');
const Routernguoidung = require('./app/routes/nguoidung.route');
const Routermuontra = require('./app/routes/muontra.route');
const Routernhanvien = require('./app/routes/nhanvien.route');
const Routernhaxuatban = require('./app/routes/nhaxuatban.route');
const Routersach = require('./app/routes/sach.route');

// class error
const ApiError = require("./app/api-error");

app.use(cors());
app.use(express.json());
app.use( "/api/dongia", Routerdongia );
app.use( "/api/nguoidung", Routernguoidung );
app.use( "/api/muontra", Routermuontra );
app.use( "/api/nhanvien", Routernhanvien );
app.use( "/api/nhaxuatban", Routernhaxuatban );
app.use( "/api/sach", Routersach );

// handle 404 response
app.use((req, res, next) => {
// Code ở đây sẽ chạy khi không có route được định nghĩa nào
// khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
return next(new ApiError(404, "Resource not found"));
});
// define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
// Middleware xử lý lỗi tập trung.
// Trong các đoạn code xử lý ở các route, gọi next(error)
// sẽ chuyển về middleware xử lý lỗi này
return res.status(err.statusCode || 500).json({
message: err.message || "Internal Server Error",
});
});

app.get("/", (req, res) => { 
    res.json({
        message: "Hello World!"
    })
})

module.exports = app;
