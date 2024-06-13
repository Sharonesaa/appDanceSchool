import { RoleModel } from "../config/data-source";

export const getRolesService = async () => {
    const roles = await RoleModel.find();
    return roles;
};
