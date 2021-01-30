import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { CtaModel } from './cta.model';

@Entity()
export class MainCardModel {
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
