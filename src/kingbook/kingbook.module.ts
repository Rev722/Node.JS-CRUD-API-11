import { Module } from '@nestjs/common';
import { KingbookService } from './kingbook.service';
import { KingbookController } from './kingbook.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { KingbookSchema } from './schema/kingbook.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Kingbook', schema: KingbookSchema }])],
  providers: [KingbookService],
  controllers: [KingbookController]
})
export class KingbookModule {}
