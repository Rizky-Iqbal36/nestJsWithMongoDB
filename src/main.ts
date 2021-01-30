import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { getMongoManager } from 'typeorm';
// import { BannerModel } from './database/models/banner.model';
// import { CtaModel } from './database/models/cta.model';
async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(port, () => console.log(`Listening on port ${port}`));
  // const banners = new BannerModel();
  // banners.image = 'https://cdn.halojasa.com/banner.jpeg';
  // banners.cta = [new CtaModel('WEBVIEW', 'https://halojasa.com/blog/info1')];
  // const bannerManager = getMongoManager();
  // await bannerManager.save(banners);
  // console.log(banners);
}
bootstrap();
