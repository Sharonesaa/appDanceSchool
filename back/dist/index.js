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
const StyleRepository_1 = __importDefault(require("./repositories/StyleRepository"));
const ClassRepository_1 = __importDefault(require("./repositories/ClassRepository"));
function initializeDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield data_source_1.AppDataSource.initialize();
            console.log("Conexión a base de datos exitosa");
            // Crear el rol inicial si no existe
            const roleCount = yield RoleRepository_1.default.count();
            if (roleCount === 0) {
                const initialRole = RoleRepository_1.default.create({
                    name: 'ESTUDIANTE',
                    active: true,
                });
                yield RoleRepository_1.default.save(initialRole);
                console.log("Initial role has been created.");
            }
            // Crear estilos iniciales si no existen
            const styleCount = yield StyleRepository_1.default.count();
            if (styleCount === 0) {
                const initialStylesData = [
                    { name: 'salsa lady style 1', description: 'salsa en 1' },
                    { name: 'mambo', description: 'salsa en 2' },
                    { name: 'Stretching', description: 'Flexibilidad' }
                ];
                const initialStyles = initialStylesData.map(styleData => StyleRepository_1.default.create(styleData));
                yield StyleRepository_1.default.save(initialStyles);
                console.log("Initial styles have been created.");
            }
            // Obtener los estilos desde la base de datos
            const styles = yield Promise.all([
                StyleRepository_1.default.findOneOrFail({ where: { name: 'salsa lady style 1' } }),
                StyleRepository_1.default.findOneOrFail({ where: { name: 'mambo' } }),
                StyleRepository_1.default.findOneOrFail({ where: { name: 'Stretching' } }),
            ]);
            // Crear clases iniciales si no existen
            const classCount = yield ClassRepository_1.default.count();
            if (classCount === 0) {
                const initialClasses = [
                    { day: 'lunes', startTime: '09:00', endTime: '12:00', price: 4500, style: styles[0] },
                    { day: 'martes', startTime: '09:00', endTime: '12:00', price: 5500, style: styles[1] },
                    { day: 'viernes', startTime: '09:00', endTime: '12:00', price: 5000, style: styles[2] },
                ];
                yield ClassRepository_1.default.save(initialClasses);
                console.log("Initial classes have been created.");
            }
            server_1.default.listen(envs_1.PORT, () => {
                console.log(`Server is running on port ${envs_1.PORT}`);
            });
        }
        catch (err) {
            console.error("Error during data source initialization", err);
        }
    });
}
initializeDatabase();
