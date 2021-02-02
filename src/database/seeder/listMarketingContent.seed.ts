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
  const banner0 = new BannerDoc();
  banner0.image = 'https://cdn.halojasa.com/banner.jpeg';
  banner0.cta = new CtaDoc();
  banner0.cta.type = 'WEBVIEW';
  banner0.cta.ref = 'https://halojasa.com/blog/info1';
  await manager.save(banner0);

  const banner1 = new BannerDoc();
  banner1.image = 'https://cdn.halojasa.com/halomassage.jpeg';
  banner1.cta = new CtaDoc();
  banner1.cta.type = 'DEEPLINK';
  banner1.cta.ref = 'halo.jasa.startup:halomassage';
  await manager.save(banner1);

  const banner2 = new BannerDoc();
  banner2.image = 'https://cdn.halojasa.com/bonuspromo.jpeg';
  banner2.cta = new CtaDoc();
  banner2.cta.type = 'WEBVIEW';
  banner2.cta.ref = 'https://halojasa.com/blog/promo';
  await manager.save(banner2);
  //[END seed_banner]

  //[START seed_main_cards]
  const maincard0 = new MainCardDoc();
  maincard0.title = 'Tips Perawatan Dapur ala Halojasa';
  maincard0.image = 'https://cdn.halojasa.com/perawatan-dapur.jpeg';
  maincard0.cta = new CtaDoc();
  maincard0.cta.type = 'ARTICLE';
  maincard0.cta.ref = '507f1f77bcf86cd799419011';
  await manager.save(maincard0);

  const maincard1 = new MainCardDoc();
  maincard1.title = 'Tips Perawatan Dapur ala Halojasa';
  maincard1.image = 'https://cdn.halojasa.com/perawatan-dapur.jpeg';
  maincard1.cta = new CtaDoc();
  maincard1.cta.type = 'ARTICLE';
  maincard1.cta.ref = '507f1f77bcf86cd799419011';
  await manager.save(maincard1);
  //[END seed_main_cards]

  //[START seed_mini_carousel]
  const minicarousel0 = new MiniCarouselDoc();
  minicarousel0.name = 'Tepar';
  minicarousel0.description = 'Tebak Personality';
  minicarousel0.cards = [
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
  await manager.save(minicarousel0);

  const minicarousel1 = new MiniCarouselDoc();
  minicarousel1.name = 'Bakpia';
  minicarousel1.description = 'Tebak Pilm Halojasa';
  minicarousel1.cards = [
    new CardDoc(
      'Kamu yang suka nonton Jamesbond',
      'https://cdn.halojasa.com/bakpia1.jpeg',
      { type: 'WEBVIEW', ref: 'http://typeform.com/bakpia' },
    ),
    new CardDoc(
      'Film Netflix Favourite Kamu',
      'https://cdn.halojasa.com/bakpia2.jpeg',
      { type: 'ARTICLE', ref: '507f1f77bcf86cd799439011' },
    ),
  ];
  await manager.save(minicarousel1);
  //[END seed_mini_carousel]

  //[START seed_news]
  const news0 = new NewsDoc();
  news0.title = 'Apa yang kamu ketahui tentang Covid19 ?';
  news0.image = 'https://cdn.halojasa.com/covid.jpeg';
  news0.cta = new CtaDoc();
  news0.cta.type = 'ARTICLE';
  news0.cta.ref = '507f1f77bcf86cd799439011';
  await manager.save(news0);

  const news1 = new NewsDoc();
  news1.title = 'Kami Bagikan Info Menarik Seputar Sepakbola';
  news1.image = 'https://cdn.halojasa.com/bola.jpeg';
  news1.cta = new CtaDoc();
  news1.cta.type = 'ARTICLE';
  news1.cta.ref = '507f1f77bcf86cd799439011';
  await manager.save(news1);
  //[END seed_news]
}
seedListMarketingContent();
