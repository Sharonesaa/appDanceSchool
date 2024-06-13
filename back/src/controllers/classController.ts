import { Request, Response } from 'express';
import { ClassDTO } from '../dto/Class';
import { getClassByIdService, getAllClassesService, createClassService, updateClassService, deactivateClassService } from '../services/classService';

export const getClassByIdController = async (req: Request, res: Response) => {
    try {
        const classId = parseInt(req.params.id, 10);
        const classInfo = await getClassByIdService(classId);
        res.status(200).json(classInfo);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching class', error });
    }
};

export const getAllClassesController = async (req: Request, res: Response) => {
    try {
        const classes = await getAllClassesService();
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching classes', error });
    }
};

export const createClassController = async (req: Request, res: Response) => {
    try {
      const { day, startTime, endTime, price, active, styleId } = req.body;
  
      // Llamar al servicio para crear la clase
      const newClass = await createClassService({ day, startTime, endTime, price, styleId });
  
      // Devolver la respuesta al cliente
      return res.status(201).json(newClass);
    } catch (error) {
      console.error('Error creating class:', error);
      return res.status(500).json({ message: 'Error creating class', error });
    }
  };

export const updateClassController = async (req: Request, res: Response) => {
    try {
        const classId = parseInt(req.params.id, 10);
        const classData: ClassDTO = req.body;
        const updatedClass = await updateClassService(classId, classData);
        res.status(200).json(updatedClass);
    } catch (error) {
        res.status(500).json({ message: 'Error updating class', error });
    }
};

export const deactivateClassController = async (req: Request, res: Response) => {
    try {
        const classId = parseInt(req.params.id, 10);
        if (isNaN(classId)) {
            return res.status(400).json({ message: 'Invalid class ID' });
        }
        const updatedClass = await deactivateClassService(classId);
        res.status(200).json(updatedClass);
    } catch (error) {
        res.status(500).json({ message: 'Error deactivating class', error});
    }
}
