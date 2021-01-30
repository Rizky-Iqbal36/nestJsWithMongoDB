import { TypeOrmModule } from '@nestjs/typeorm';
import app from '../app/config/app';

import {
  BannerDoc,
  MainCardDoc,
  MiniCarouselDoc,
  NewsDoc,
} from './documents/index';
export default TypeOrmModule.forRoot({
  type: 'mongodb',
  url: app.database.url,
  useNewUrlParser: app.database.useNewUrlParser,
  synchronize: app.database.synchronize,
  logging: app.database.logging,
  useUnifiedTopology: app.database.useUnifiedTopology,
  entities: [BannerDoc, MainCardDoc, MiniCarouselDoc, NewsDoc],
});
