import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { getMongoManager } from 'typeorm';
// import { BannerDoc, CtaDoc } from './database/documents/index';
async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(port, () => console.log(`Listening on port ${port}`));
  // const banners = new BannerDoc();
  // banners.image = 'https://cdn.halojasa.com/banner.jpeg';
  // banners.cta = [new CtaDoc('WEBVIEW', 'https://halojasa.com/blog/info1')];
  // const bannerManager = getMongoManager();
  // await bannerManager.save(banners);
  // console.log(banners);
}
bootstrap();
