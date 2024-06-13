import { AppDataSource } from '../config/data-source';
import { Class } from "../entities/Class";

const ClassRepository = AppDataSource.getRepository(Class);
export default ClassRepository;