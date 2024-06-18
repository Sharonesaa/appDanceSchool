import { EntityRepository, Repository } from 'typeorm';
import { Credential } from '../entities/Credential';

@EntityRepository(Credential)
export class CredentialRepository extends Repository<Credential> {
  // Métodos personalizados si son necesarios
}

export default CredentialRepository;