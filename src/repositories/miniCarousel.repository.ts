import { EntityRepository, Repository } from 'typeorm';
import { MiniCarouselDoc } from '../database/documents/miniCarousel.doc';

@EntityRepository(MiniCarouselDoc)
export class MiniCarouselRepository extends Repository<MiniCarouselDoc> {
  public async getAllMiniCarousels() {
    const getMiniCarousels = await this.find();
    if (getMiniCarousels.length < 1)
      console.log('Mini carousel data not found');

    return getMiniCarousels;
  }
}
