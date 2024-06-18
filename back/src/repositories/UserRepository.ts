import {EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByName(username: string): Promise<User | null> {
    return this.createQueryBuilder('user')
      .where('user.username = :username', { username })
      .getOne();
  }

  async findLastUser(): Promise<User | null> {
    return this.createQueryBuilder('user')
      .orderBy('user.inventory', 'DESC')
      .getOne();
  }

  async findById(id: number): Promise<User | null> {
    return this.findOne({ where: { id } });
  }

  async deactivateUser(id: number): Promise<User | undefined> {
    const user = await this.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    user.active = false;
    return this.save(user);
  }
}

export default UserRepository;
