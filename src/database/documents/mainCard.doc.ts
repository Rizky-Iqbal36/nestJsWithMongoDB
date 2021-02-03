import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { CtaDoc } from './subdocuments/cta.doc';

@Entity({ name: 'MainCardDoc' })
export class MainCardDoc {
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
