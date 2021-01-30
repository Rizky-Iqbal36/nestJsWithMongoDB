import { Entity, Column } from 'typeorm';
import { CardModel } from './card.model';

@Entity()
export class MiniCarouselModel {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column((type) => CardModel)
  cards: CardModel[];
}
