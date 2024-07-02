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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = __importDefault(require("./server"));
const envs_1 = require("./config/envs");
const data_source_1 = require("./config/data-source");
const RoleRepository_1 = __importDefault(require("./repositories/RoleRepository"));
function initializeDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield data_source_1.AppDataSource.initialize();
            console.log("Conexión a base de datos exitosa");
            // Crear el rol inicial si no existe
            const roleCount = yield RoleRepository_1.default.count();
            if (roleCount === 0) {
                const initialRole = RoleRepository_1.default.create({
                    id: 1,
                    name: 'ESTUDIANTE',
                    active: true,
                });
                yield RoleRepository_1.default.save(initialRole);
                console.log("Initial role has been created.");
            }
            server_1.default.listen(envs_1.PORT, () => {
                console.log(`Server is running on port ${envs_1.PORT}`);
            });
        }
        catch (err) {
            console.error("Error durante la inicialización de la fuente de datos", err);
        }
    });
}
initializeDatabase();
