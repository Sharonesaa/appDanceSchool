import { EntityRepository, Repository } from 'typeorm';
import { Style } from '../entities/Style';

@EntityRepository(Style)
export class StyleRepository extends Repository<Style> {
  async findActiveStyles(): Promise<Style[]> {
    return this.find({ where: { active: true } });
  }

  async deactivateStyleById(id: number): Promise<Style | null> {
    const style = await this.findOne({ where: { id } });
    if (!style) {
      throw new Error('Style not found');
    }
    style.active = false;
    return this.save(style);
  }
}

export default StyleRepository;
