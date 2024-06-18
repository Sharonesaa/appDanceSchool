import RoleRepository  from "../repositories/RoleRepository";

export const getRolesService = async () => {
    const roles = await RoleRepository.find();
    return roles;
};
