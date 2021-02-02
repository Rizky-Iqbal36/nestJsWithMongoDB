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
  // name: app.database.name,
  url: app.database.url,
  useNewUrlParser: app.database.useNewUrlParser,
  synchronize: app.database.synchronize,
  logging: app.database.logging,
  useUnifiedTopology: app.database.useUnifiedTopology,
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
