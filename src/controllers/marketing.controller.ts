import { Controller, Get, Req } from '@nestjs/common';
import { MarketingService } from '../services/marketing.service';
import { Request } from 'express';
import { SuccessResponse } from '../app/exceptions/httpException';
@Controller()
export class BannerController {
  constructor(private readonly marketingService: MarketingService) {}

  @Get('/marketing/mobile/content')
  async getAllData(@Req() req: Request) {
    const traceID = req.header('X-Trace-ID');
    console.log(traceID);
    const getResult = await this.marketingService.getAllData();
    const obj: Object = {
      status: 200,
      traceId: traceID,
      result: getResult,
    };
    throw new SuccessResponse(obj);
  }
}