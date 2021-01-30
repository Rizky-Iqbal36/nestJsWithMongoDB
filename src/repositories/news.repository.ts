import { EntityRepository, Repository } from 'typeorm';
import { NewsDoc } from '../database/documents/news.doc';

@EntityRepository(NewsDoc)
export class NewsRepository extends Repository<NewsDoc> {
  public async getAllNews() {
    const getNews = await this.find();
    if (getNews.length < 1) console.log('News data not found');

    return getNews;
  }
}
