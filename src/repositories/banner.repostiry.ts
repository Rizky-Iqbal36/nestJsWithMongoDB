import { EntityRepository, Repository } from 'typeorm';
import { BannerDoc } from '../database/documents/banner.doc';
// import { NotFoundException } from '../app/exceptions/httpException';

@EntityRepository(BannerDoc)
export class BannerRepository extends Repository<BannerDoc> {
  public async getAllBanners() {
    const getBanners = await this.find();
    if (getBanners.length < 1) console.log('Banners data not found');
    // throw new NotFoundException('Data not found');

    return getBanners;
  }
}
