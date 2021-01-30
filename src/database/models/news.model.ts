import {
  Entity,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  ObjectID,
} from 'typeorm';
import { CtaModel } from './cta.model';

@Entity()
export class NewsModel {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  tittle: string;

  @Column()
  image: string;

  @Column((type) => CtaModel)
  cta: CtaModel[];

  @CreateDateColumn()
  createdAt: Date;
}
