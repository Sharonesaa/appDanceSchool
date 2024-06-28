"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_proxy_middleware_1 = require("http-proxy-middleware");
module.exports = function (app) {
    app.use('/turns', (0, http_proxy_middleware_1.createProxyMiddleware)({
        target: 'http://localhost:3000',
        changeOrigin: true,
    }));
};
