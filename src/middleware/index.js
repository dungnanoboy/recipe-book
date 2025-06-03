const staticMiddleware = require('./static');
const viewEngineMiddleware = require('./viewEngine');
const expressMiddleware = require('./express');

const initMiddleware = (app) => {
    expressMiddleware(app);
    viewEngineMiddleware(app);
    staticMiddleware(app);
};

module.exports = initMiddleware;