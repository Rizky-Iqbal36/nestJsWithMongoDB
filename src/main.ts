import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  seedListMarketingContent,
  seedMarketingContent,
} from './database/seeder/index';
async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await seedListMarketingContent();
  await seedMarketingContent();
  await app.listen(port, () => console.log(`Listening on port ${port}`));
}
bootstrap();
