import {
  Entity,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  ObjectID,
} from 'typeorm';
import { CtaDoc } from './subdocuments/cta.doc';

@Entity({ name: 'NewsDoc' })
export class NewsDoc {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column((type) => CtaDoc)
  cta: CtaDoc;

  @CreateDateColumn()
  createdAt: Date;
}
