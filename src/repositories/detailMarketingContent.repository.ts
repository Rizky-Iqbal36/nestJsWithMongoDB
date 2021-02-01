import { EntityRepository, Repository } from 'typeorm';
import { MarketingContentDoc } from '../database/documents/marketingContent.doc';

@EntityRepository(MarketingContentDoc)
export class MarketingContentRepository extends Repository<MarketingContentDoc> {
  public async getDetail(id: string) {
    const getData = await this.find({ where: id });
    if (getData.length < 1) console.log('Data not found');

    return getData;
  }
}
