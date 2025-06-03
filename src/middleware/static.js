const express = require('express');
const path = require('path');

const staticMiddleware = (app) => {
    // Phục vụ file tĩnh từ thư mục public
    app.use(express.static(path.join(__dirname, '../public')));
    app.use('/css', express.static(path.join(__dirname, '../public/css')));
    app.use('/js', express.static(path.join(__dirname, '../public/js')));
    app.use('/img', express.static(path.join(__dirname, '../public/img')));
    
    // Serve static files for admin
    app.use('/admin/assets', express.static(path.join(__dirname, '../views/admin/assets')));
};

module.exports = staticMiddleware;