import { EntityRepository, Repository } from 'typeorm';
import { BannerModel } from '../database/models/banner.model';
import {
  SuccessResponse,
  NotFoundException,
} from '../app/exceptions/httpException';
@EntityRepository(BannerModel)
export class BannerRepository extends Repository<BannerModel> {
  public async getAll() {
    const getBanner = await this.find();
    if (getBanner.length < 1) throw new NotFoundException('Data not found');

    const obj = {
      status: 'OK',
      message: 'Data succesfully loaded',
      result: {
        banners: getBanner,
        maincards: [],
        minicarousel: [],
        news: [],
      },
    };
    throw new SuccessResponse(obj);
  }
}
