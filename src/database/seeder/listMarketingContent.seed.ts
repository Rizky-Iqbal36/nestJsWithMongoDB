import { getMongoManager } from 'typeorm';
import {
  BannerDoc,
  CtaDoc,
  MiniCarouselDoc,
  CardDoc,
  MainCardDoc,
  NewsDoc,
} from '../documents/index';

export async function seedListMarketingContent() {
  const manager = getMongoManager();
  //[START seed_banner]
  const banners = new BannerDoc();
  banners.image = 'https://cdn.halojasa.com/banner.jpeg';
  banners.cta = new CtaDoc();
  banners.cta.type = 'DEEPLINK';
  banners.cta.ref = 'halo.jasa.startup:halomassage';
  await manager.save(banners);
  //[END seed_banner]

  //[START seed_main_cards]
  const maincard = new MainCardDoc();
  maincard.title = 'Tips Perawatan Dapur ala Halojasa';
  maincard.image = 'https://cdn.halojasa.com/perawatan-dapur.jpeg';
  maincard.cta = new CtaDoc();
  maincard.cta.type = 'ARTICLE';
  maincard.cta.ref = '507f1f77bcf86cd799419011';
  await manager.save(maincard);
  //[END seed_main_cards]

  //[START seed_mini_carousel]
  const minicarousel = new MiniCarouselDoc();
  minicarousel.name = 'Tepar';
  minicarousel.description = 'Tebak Personality';
  minicarousel.cards = [
    new CardDoc(
      'Tepar Ala Kopi Favoritmu',
      'https://cdn.halojasa.com/tepar1.jpeg',
      { type: 'WEBVIEW', ref: 'http://typeform.com/tepar' },
    ),
    new CardDoc(
      'Seberapa Tepar Kamu Hari Ini',
      'https://cdn.halojasa.com/tepar2.jpeg',
      { type: 'ARTICLE', ref: '507f1f77bcf86cd799439011' },
    ),
  ];
  await manager.save(minicarousel);
  //[END seed_mini_carousel]

  //[START seed_news]
  const news = new NewsDoc();
  news.title = 'Apa yang kamu ketahui tentang Covid19 ?';
  news.image = 'https://cdn.halojasa.com/covid.jpeg';
  news.cta = new CtaDoc();
  news.cta.type = 'ARTICLE';
  news.cta.ref = '507f1f77bcf86cd799439011';
  await manager.save(news);
  //[END seed_news]

  // console.log({ banners, maincard, minicarousel, news });
}
seedListMarketingContent();
