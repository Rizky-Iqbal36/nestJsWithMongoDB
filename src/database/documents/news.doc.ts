import {
  Entity,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  ObjectID,
} from 'typeorm';
import { CtaDoc } from './subdocuments/cta.doc';

@Entity()
export class NewsDoc {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  tittle: string;

  @Column()
  image: string;

  @Column((type) => CtaDoc)
  cta: CtaDoc[];

  @CreateDateColumn()
  createdAt: Date;
}
