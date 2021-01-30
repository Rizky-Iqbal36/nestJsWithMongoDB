import { TypeOrmModule } from '@nestjs/typeorm';
import app from '../app/config/app';

import { BannerModel } from './documents/banner.model';
// import { CardModel } from './documents/subdocuments/card.model';
// import { CtaModel } from './documents/subdocuments/cta.model';
import { MainCardModel } from './documents/mainCard.model';
import { MiniCarouselModel } from './documents/miniCarousel.model';
import { NewsModel } from './documents/news.model';
export default TypeOrmModule.forRoot({
  type: 'mongodb',
  url: app.database.url,
  useNewUrlParser: app.database.useNewUrlParser,
  synchronize: app.database.synchronize,
  logging: app.database.logging,
  useUnifiedTopology: app.database.useUnifiedTopology,
  entities: [BannerModel, MainCardModel, MiniCarouselModel, NewsModel],
});
