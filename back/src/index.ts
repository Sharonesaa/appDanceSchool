import "reflect-metadata";
import server from './server';
import { PORT } from './config/envs';
import { AppDataSource } from './config/data-source';
import RoleRepository from './repositories/RoleRepository';
import StyleRepository from "./repositories/StyleRepository";
import ClassRepository from "./repositories/ClassRepository";
import { Style } from "./entities/Style";
import { Class } from "./entities/Class";

async function initializeDatabase() {
  try {
    await AppDataSource.initialize();
    console.log("Conexión a base de datos exitosa");

    // Crear el rol inicial si no existe
    const roleCount = await RoleRepository.count();
    if (roleCount === 0) {
      const initialRole = RoleRepository.create({
        name: 'ESTUDIANTE',
        active: true,
      });
      await RoleRepository.save(initialRole);
      console.log("Initial role has been created.");
    }

    // Crear estilos iniciales si no existen
    const styleCount = await StyleRepository.count();
    if (styleCount === 0) {
      const initialStylesData = [
        { name: 'salsa lady style 1', description: 'salsa en 1' },
        { name: 'mambo', description: 'salsa en 2' },
        { name: 'Stretching', description: 'Flexibilidad' }
      ];
      
      const initialStyles = initialStylesData.map(styleData => StyleRepository.create(styleData));
      await StyleRepository.save(initialStyles);
      console.log("Initial styles have been created.");
    }

    // Obtener los estilos desde la base de datos
    const styles: Style[] = await Promise.all([
      StyleRepository.findOneOrFail({ where: { name: 'salsa lady style 1' } }),
      StyleRepository.findOneOrFail({ where: { name: 'mambo' } }),
      StyleRepository.findOneOrFail({ where: { name: 'Stretching' } }),
    ]);

    // Crear clases iniciales si no existen
    const classCount = await ClassRepository.count();
    if (classCount === 0) {
      const initialClasses: Partial<Class>[] = [
        { day: 'lunes', startTime: '09:00', endTime: '12:00', price: 4500, style: styles[0] },
        { day: 'martes', startTime: '09:00', endTime: '12:00', price: 5500, style: styles[1] },
        { day: 'viernes', startTime: '09:00', endTime: '12:00', price: 5000, style: styles[2] },
      ];

      await ClassRepository.save(initialClasses);
      console.log("Initial classes have been created.");
    }

    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Error during data source initialization", err);
  }
}

initializeDatabase();
