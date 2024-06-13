import { Request, Response } from 'express';
import { getRolesService } from '../services/roleServicie';

export const getRoles = async (req: Request, res: Response) => {
    try {
        const roles = await getRolesService();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching roles', error });
    }
};
