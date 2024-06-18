"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivateUserService = exports.getUserByIdService = exports.getUsersService = exports.loginUserService = exports.createUserService = void 0;
// services/userService.ts
const User_1 = require("../entities/User");
const Credential_1 = require("../entities/Credential");
const data_source_1 = require("../config/data-source");
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const CredentialRepository_1 = __importDefault(require("../repositories/CredentialRepository"));
const userRepository = data_source_1.AppDataSource.getCustomRepository(UserRepository_1.default);
const credentialRepository = data_source_1.AppDataSource.getCustomRepository(CredentialRepository_1.default);
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = userData, rest = __rest(userData, ["username", "password"]);
    if (!password) {
        throw new Error('Password cannot be null or undefined');
    }
    return yield data_source_1.AppDataSource.manager.transaction((transactionalEntityManager) => __awaiter(void 0, void 0, void 0, function* () {
        const lastUser = yield userRepository.findLastUser();
        const lastInventory = lastUser ? lastUser.inventory : 0;
        const newInventory = lastInventory + 2;
        const credentialData = {
            username: username,
            password: password
        };
        const credential = transactionalEntityManager.create(Credential_1.Credential, credentialData);
        yield transactionalEntityManager.save(Credential_1.Credential, credential);
        const newUser = transactionalEntityManager.create(User_1.User, Object.assign(Object.assign({}, rest), { username: username, credential: credential, role: { id: 1 }, active: true, inventory: newInventory }));
        const createdUser = yield transactionalEntityManager.save(User_1.User, newUser);
        return createdUser;
    }));
});
exports.createUserService = createUserService;
const loginUserService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const credential = yield credentialRepository.findOne({ where: { username, password }, relations: ['user'] });
    if (credential && credential.password === password) {
        return credential.user;
    }
    return null;
});
exports.loginUserService = loginUserService;
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userRepository.find();
    return users;
});
exports.getUsersService = getUsersService;
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userRepository.findById(id);
    return user;
});
exports.getUserByIdService = getUserByIdService;
const deactivateUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield userRepository.deactivateUser(id);
    return updatedUser;
});
exports.deactivateUserService = deactivateUserService;
