import { TypeOrmModule } from '@nestjs/typeorm';

//Controller Layer
import { MarketingController } from './controllers/marketing.controller';
export const controllers = [MarketingController];

//Service layer
import { MarketingService } from './services/marketing.service';
export const services = [MarketingService];

//repository
import {
  BannerRepository,
  MainCardRepository,
  MiniCarouselRepository,
  NewsRepository,
  MarketingContentRepository,
} from './repositories/index';
export const repositories = TypeOrmModule.forFeature([
  BannerRepository,
  MainCardRepository,
  MiniCarouselRepository,
  NewsRepository,
  MarketingContentRepository,
]);
