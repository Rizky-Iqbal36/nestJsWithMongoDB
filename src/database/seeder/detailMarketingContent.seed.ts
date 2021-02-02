import { getMongoManager } from 'typeorm';
import { MarketingContentDoc, CtaButtonDetailDoc } from '../documents/index';

export async function seedMarketingContent() {
  const manager = getMongoManager();
  //[START seed_marketing_content]
  const marketingContent = new MarketingContentDoc();
  marketingContent.id = '507f1f77bcf86cd799439011';
  marketingContent.title = 'Apa yang kamu ketahui tentang Covid19 ?';
  marketingContent.description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing';
  marketingContent.image = 'https://cdn.halojasa.com/covid.jpeg';
  marketingContent.isHasCtaButton = true;
  marketingContent.ctaButtonDetail = new CtaButtonDetailDoc();
  marketingContent.ctaButtonDetail.ctaButtonName = 'AC And Bermasalah ?';
  marketingContent.ctaButtonDetail.ctaButtonDescription = 'Mulai Dari';
  marketingContent.ctaButtonDetail.ctaButtonPriceDescription = 'Rp 350.000';
  marketingContent.ctaButtonDetail.ctaButtonFirebaseEventName =
    'COVID_NEWS_INFORMATION';
  marketingContent.ctaButtonDetail.ctaButtonType = 'WEBVIEW';
  marketingContent.ctaButtonDetail.ctaButtonLink = 'https://halojasa.com';
  await manager.save(marketingContent);
  //[END seed_marketing_content]
}
