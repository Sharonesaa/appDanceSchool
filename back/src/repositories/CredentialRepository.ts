import { AppDataSource } from '../config/data-source';
import { Credential } from '../entities/Credential';

const CredentialRepository = AppDataSource.getRepository(Credential).extend({

  // Métodos personalizados si son necesarios
})

export default CredentialRepository;