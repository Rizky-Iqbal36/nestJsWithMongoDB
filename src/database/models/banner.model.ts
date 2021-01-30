import { type } from 'os';
import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { CtaModel } from './cta.model';

@Entity()
export class BannerModel {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  image: string;

  @Column((type) => CtaModel)
  cta: CtaModel[];

  @CreateDateColumn()
  createdAt: Date;
}
