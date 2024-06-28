import { ClassDTO } from '../dto/Class';
import { Class } from '../entities/Class';
import { Style } from '../entities/Style';
import { AppDataSource } from '../config/data-source';
import ClassRepository from '../repositories/ClassRepository';
import StyleRepository from '../repositories/StyleRepository';


export const createClassService = async (classData: any) => {
  const { day, startTime, endTime, price, styleId } = classData;
  console.log(classData);

  const style = await StyleRepository.findOne({ where: { id: styleId } });

  if (!style) {
    throw new Error('Style not found');
  }

  const newClass = ClassRepository.create({
    day,
    startTime,
    endTime,
    price,
    style, // Asignar el estilo obtenido de la base de datos
  });

  await ClassRepository.save(newClass);
  return newClass;
};

export const getClassByIdService = async (id: number) => {
  const classInfo = await ClassRepository.findOne({ where: { id }, relations: ['style'] });
  return classInfo;
};

export const getAllClassesService = async (): Promise<Class[]> => {
  const classes = await ClassRepository.findActiveClasses();
  return classes;
};

export const updateClassService = async (id: number, classData: ClassDTO): Promise<Class | undefined> => {
  const existingClass = await ClassRepository.findOne({ where: { id } });
  if (!existingClass) {
    throw new Error('Class not found');
  }

  ClassRepository.merge(existingClass, classData);
  const updatedClass = await ClassRepository.save(existingClass);
  return updatedClass;
};

export const deactivateClassService = async (id: number): Promise<Class | null> => {
  const updatedClass = await ClassRepository.deactivateClassById(id);
  return updatedClass;
};