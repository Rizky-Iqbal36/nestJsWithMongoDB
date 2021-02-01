import { Column } from 'typeorm';

export class CtaButtonDetailDoc {
  @Column()
  ctaButtonName: string;

  @Column()
  ctaButtonDescription: string;

  @Column()
  ctaButtonPriceDescription: string;

  @Column()
  ctaButtonFirebaseEventName: string;

  @Column()
  ctaButtonType: string;

  @Column()
  ctaButtonLink: string;
}
