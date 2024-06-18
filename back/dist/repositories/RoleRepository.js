"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const Role_1 = require("../entities/Role");
const RoleRepository = data_source_1.AppDataSource.getRepository(Role_1.Role);
exports.default = RoleRepository;
