"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelTurn = exports.getTurns = exports.createTurn = void 0;
const createTurn = (req, res) => {
    // lógica para crear un turno
    res.status(201).send('Turn created');
};
exports.createTurn = createTurn;
const getTurns = (req, res) => {
    // lógica para obtener los turnos
    res.status(200).send('List of turns');
};
exports.getTurns = getTurns;
const cancelTurn = (req, res) => {
    // lógica para cancelar un turno
    res.status(200).send('Turn canceled');
};
exports.cancelTurn = cancelTurn;
// Puedes exportar más controladores si es necesario
