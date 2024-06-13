import { AppDataSource } from '../config/data-source';
import { Style } from "../entities/Style";

const StyleRepository = AppDataSource.getRepository(Style);
export default StyleRepository;