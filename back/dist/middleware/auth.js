"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth = (req, res, next) => {
    const { token } = req.headers;
    console.log(token);
    if (token === "autenticado")
        next();
    else
        res.status(400).json();
};
exports.default = auth;
