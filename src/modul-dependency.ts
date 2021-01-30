import { TypeOrmModule } from '@nestjs/typeorm';

//Controller Layer
import { BannerController } from './controllers/marketing.controller';
export const controllers = [BannerController];

//Service layer
import { MarketingService } from './services/marketing.service';
export const services = [MarketingService];

//repository
import {
  BannerRepository,
  MainCardRepository,
  MiniCarouselRepository,
  NewsRepository,
} from './repositories/index';
export const repositories = TypeOrmModule.forFeature([
  BannerRepository,
  MainCardRepository,
  MiniCarouselRepository,
  NewsRepository,
]);
