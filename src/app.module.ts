import { Module } from '@nestjs/common';
import Database from './database/index';
import { controllers, repositories, services } from './modul-dependency';
@Module({
  imports: [Database, repositories],
  controllers: [...controllers],
  providers: [...services],
})
export class AppModule {}
