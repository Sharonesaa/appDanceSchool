import { AppDataSource } from '../config/data-source';
import { Role } from "../entities/Role";

const RoleRepository = AppDataSource.getRepository(Role);
export default RoleRepository;