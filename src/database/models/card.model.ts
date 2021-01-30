import {
  Entity,
  Column,
  CreateDateColumn,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';
import { CtaModel } from './cta.model';

@Entity()
export class CardModel {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column((type) => CtaModel)
  cta: CtaModel[];

  @CreateDateColumn()
  createdAt: Date;
}
