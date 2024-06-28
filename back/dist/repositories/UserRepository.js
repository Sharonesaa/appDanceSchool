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
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const User_1 = require("../entities/User");
const UserRepository = data_source_1.AppDataSource.getRepository(User_1.User).extend({
    findByName(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createQueryBuilder('user')
                .where('user.username = :username', { username })
                .getOne();
        });
    },
    findLastUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createQueryBuilder('user')
                .orderBy('user.inventory', 'DESC')
                .getOne();
        });
    },
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findOne({ where: { id } });
        });
    },
    deactivateUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findOne({ where: { id } });
            if (!user) {
                throw new Error('User not found');
            }
            user.active = false;
            return this.save(user);
        });
    }
});
exports.default = UserRepository;
