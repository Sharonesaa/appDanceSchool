import { ClassDTO } from '../dto/Class';
import { Class } from '../entities/Class';
import { Style } from '../entities/Style';
import { ClassModel } from '../config/data-source';
import { StyleModel } from '../config/data-source';

export const createClassService = async (classData: any) => {
    const { day, startTime, endTime, price, styleId } = classData;
    console.log(classData)
  
    // Obtener el repositorio de la clase y el estilo
    const classRepository = ClassModel;
    const styleRepository = StyleModel;
  
    // Buscar el estilo por su ID en la base de datos
    
    const style = await styleRepository.findOne({ where: { id: styleId } });
  
    if (!style) {
      throw new Error('Style not found');
    }
  
    // Crear una nueva instancia de la clase con el estilo asociado
    const newClass = classRepository.create({
      day,
      startTime,
      endTime,
      price,
      style, // Asignar el estilo obtenido de la base de datos
    });
  
    // Guardar la nueva instancia de la clase en la base de datos
    await classRepository.save(newClass);
  
    // Devolver la nueva instancia de la clase creada
    return newClass;
  };

export const getClassByIdService = async (id: number) => {
    const classInfo = await ClassModel.findOneBy({ id });
    return classInfo;

};

export const getAllClassesService = async (): Promise<Class[]> => {
    const classes = await ClassModel.find();
    return classes;
};



export const updateClassService = async (id: number, classData: ClassDTO): Promise<Class | undefined> => {
    const existingClass = await ClassModel.findOne({ where: { id } });
    if (!existingClass) {
        throw new Error('Class not found');
    }

    ClassModel.merge(existingClass, classData);
    const updatedClass = await ClassModel.save(existingClass);
    return updatedClass;
};

export const deactivateClassService = async (id: number): Promise<Class | undefined> => {
    const existingClass = await ClassModel.findOne({ where: { id } });
    if (!existingClass) {
        throw new Error('Class not found');
    }

    existingClass.active = false;
    const updatedClass = await ClassModel.save(existingClass);
    return updatedClass;
};