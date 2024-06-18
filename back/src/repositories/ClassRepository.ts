import { EntityRepository, Repository } from 'typeorm';
import { Class } from '../entities/Class';

@EntityRepository(Class)
export class ClassRepository extends Repository<Class> {
  async findActiveClasses(): Promise<Class[]> {
    return this.find({ where: { active: true }, relations: ['style'] });
  }

  async findClassesByStyleId(styleId: number): Promise<Class[]> {
    return this.find({ where: { style: { id: styleId } }, relations: ['style'] });
  }

  async deactivateClassById(id: number): Promise<Class | null> {
    const classEntity = await this.findOne({ where: { id } });
    if (!classEntity) {
      throw new Error('Class not found');
    }
    classEntity.active = false;
    return this.save(classEntity);
  }
}

export default ClassRepository;