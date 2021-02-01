import { Column } from 'typeorm';

export class CtaDoc {
  @Column()
  type: string;

  @Column()
  ref: string;
}
