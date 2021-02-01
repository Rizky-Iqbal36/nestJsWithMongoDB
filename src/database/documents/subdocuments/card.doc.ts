import {
  Entity,
  Column,
  CreateDateColumn,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';
import { CtaDoc } from './cta.doc';

@Entity()
export class CardDoc {
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

  constructor(title: string, image: string, cta: CtaDoc) {
    (this.title = title), (this.image = image), (this.cta = cta);
  }
}
