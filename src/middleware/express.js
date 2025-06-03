const express = require('express');
const session = require('express-session');

const expressMiddleware = (app) => {
    // Body parser middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Session middleware - thêm cookie options
    app.use(session({
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false, // set true if using https
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        }
    }));
};

module.exports = expressMiddleware;