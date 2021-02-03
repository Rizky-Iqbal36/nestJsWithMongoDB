import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import Database from './database/index';
import { controllers, repositories, services } from './modul-dependency';
import { HeaderMiddleware } from './app/middleware/header.middleware';
import * as i18n from 'i18n';
@Module({
  imports: [Database, repositories],
  controllers: [...controllers],
  providers: [...services],
})
export class AppModule {
  async configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HeaderMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.GET });
    consumer
      .apply((req, res, next) => {
        i18n.init(req, res, next);
        i18n.setLocale(req.language);
      })
      .forRoutes({ path: '*', method: RequestMethod.GET });
  }
}
