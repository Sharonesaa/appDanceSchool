import "reflect-metadata";
import server from './server';
import { PORT } from './config/envs';
import { AppDataSource } from './config/data-source';
import  RoleRepository  from './repositories/RoleRepository';

async function initializeDatabase() {
  try {
    await AppDataSource.initialize();
    console.log("Conexión a base de datos exitosa");

    // Crear el rol inicial si no existe
    const roleCount = await RoleRepository.count();
    if (roleCount === 0) {
      const initialRole = RoleRepository.create({
        id: 1,
        name: 'ESTUDIANTE',
        active: true,
      });
      await RoleRepository.save(initialRole);
      console.log("Initial role has been created.");
    }

    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Error durante la inicialización de la fuente de datos", err);
  }
}

initializeDatabase();

