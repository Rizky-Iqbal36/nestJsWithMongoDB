import { Entity, Column } from 'typeorm';
import { CardDoc } from './subdocuments/card.doc';

@Entity({ name: 'MiniCarouselDoc' })
export class MiniCarouselDoc {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column((type) => CardDoc)
  cards: CardDoc[];
}
