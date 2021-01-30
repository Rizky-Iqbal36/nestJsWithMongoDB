import { Injectable } from '@nestjs/common';
import { BannerRepository } from '../repositories/banner.repostiry';

@Injectable()
export class BannerService {
  constructor(private readonly bannerRepository: BannerRepository) {}
  public async getAll() {
    return await this.bannerRepository.getAll();
  }
}
