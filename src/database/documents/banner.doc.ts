import {
  Entity,
  ObjectIdColumn,
  ObjectID,
  Column,
  CreateDateColumn,
} from 'typeorm';
import { CtaDoc } from './subdocuments/cta.doc';

@Entity({ name: 'BannerDoc' })
export class BannerDoc {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  image: string;

  @Column((type) => CtaDoc)
  cta: CtaDoc;

  @CreateDateColumn()
  createdAt: Date;
}
