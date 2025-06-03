const path = require('path');

const viewEngineMiddleware = (app) => {
    // Cấu hình EJS
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'));
};

module.exports = viewEngineMiddleware;