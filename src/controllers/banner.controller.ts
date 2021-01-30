import { Controller, Get } from '@nestjs/common';
import { BannerService } from '../services/banner.service';

@Controller()
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Get()
  async getHello() {
    return await this.bannerService.getAll();
  }
}
