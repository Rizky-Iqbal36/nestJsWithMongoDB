import { Injectable } from '@nestjs/common';
import {
  BannerRepository,
  MainCardRepository,
  MiniCarouselRepository,
  NewsRepository,
} from '../repositories/index';
@Injectable()
export class MarketingService {
  constructor(
    private readonly bannerRepository: BannerRepository,
    private readonly mainCardRepository: MainCardRepository,
    private readonly miniCarouselRepository: MiniCarouselRepository,
    private readonly newsRepository: NewsRepository,
  ) {}
  public async getAllData() {
    const getBanners = await this.bannerRepository.getAllBanners();
    const getMainCards = await this.mainCardRepository.getAllMainCards();
    const getMiniCarousels = await this.miniCarouselRepository.getAllMiniCarousels();
    const getNews = await this.newsRepository.getAllNews();
    const result: object = {
      banners: getBanners,
      mainCards: getMainCards,
      minicarousel: getMiniCarousels,
      news: getNews,
    };
    return result;
  }
}
