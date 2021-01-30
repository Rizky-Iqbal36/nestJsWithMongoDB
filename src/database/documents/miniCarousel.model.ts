import { Entity, Column } from 'typeorm';
import { CardModel } from './subdocuments/card.model';

@Entity()
export class MiniCarouselModel {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column((type) => CardModel)
  cards: CardModel[];
}
