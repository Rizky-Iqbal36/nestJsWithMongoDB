import { EntityRepository, Repository } from 'typeorm';
import { MainCardDoc } from '../database/documents/mainCard.doc';

@EntityRepository(MainCardDoc)
export class MainCardRepository extends Repository<MainCardDoc> {
  public async getAllMainCards() {
    const getMainCards = await this.find();
    if (getMainCards.length < 1) console.log('Main cards data not found');

    return getMainCards;
  }
}
