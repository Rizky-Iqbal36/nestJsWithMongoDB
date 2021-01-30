import { TypeOrmModule } from '@nestjs/typeorm';

//Controller Layer
import { BannerController } from './controllers/banner.controller';
export const controllers = [BannerController];

//Service layer
import { BannerService } from './services/banner.service';
export const services = [BannerService];

//repository

import { BannerRepository } from './repositories/banner.repostiry';
export const repositories = TypeOrmModule.forFeature([BannerRepository]);
