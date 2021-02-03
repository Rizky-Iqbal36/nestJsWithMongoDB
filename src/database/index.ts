import { TypeOrmModule } from '@nestjs/typeorm';
import app from '../app/config/app';

import {
  BannerDoc,
  MainCardDoc,
  MiniCarouselDoc,
  NewsDoc,
  CardDoc,
  CtaDoc,
  CtaButtonDetailDoc,
  MarketingContentDoc,
} from './documents/index';

export default TypeOrmModule.forRoot({
  type: 'mongodb',
  // name: 'onyankopon',
  url: app.database.url,
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  // useUnifiedTopology: app.database.useUnifiedTopology,
  entities: [
    BannerDoc,
    MainCardDoc,
    MiniCarouselDoc,
    NewsDoc,
    CardDoc,
    CtaDoc,
    CtaButtonDetailDoc,
    MarketingContentDoc,
  ],
});
