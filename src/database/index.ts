import { TypeOrmModule } from '@nestjs/typeorm';
import app from '../app/config/app';

import { BannerModel } from './models/banner.model';
import { CardModel } from './models/card.model';
import { CtaModel } from './models/cta.model';
import { MainCardModel } from './models/mainCard.model';
import { MiniCarouselModel } from './models/miniCarousel.model';
import { NewsModel } from './models/news.model';
export default TypeOrmModule.forRoot({
  type: 'mongodb',
  url: app.database.url,
  useNewUrlParser: app.database.useNewUrlParser,
  synchronize: app.database.synchronize,
  logging: app.database.logging,
  useUnifiedTopology: app.database.useUnifiedTopology,
  entities: [
    BannerModel,
    CardModel,
    CardModel,
    CtaModel,
    MainCardModel,
    MiniCarouselModel,
    NewsModel,
  ],
});
