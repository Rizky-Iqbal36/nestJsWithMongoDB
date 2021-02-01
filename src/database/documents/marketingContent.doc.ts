import {
  Column,
  Entity,
  CreateDateColumn,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';
import { CtaButtonDetailDoc } from './subdocuments/ctaButtonDetail.doc';
@Entity()
export class MarketingContentDoc {
  @ObjectIdColumn()
  id: ObjectID | string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  isHasCtaButton: boolean;

  @Column((type) => CtaButtonDetailDoc)
  ctaButtonDetail: CtaButtonDetailDoc;

  @CreateDateColumn()
  createdAt: Date;
}
