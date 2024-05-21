import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { KingbookService } from './kingbook.service';
import { Kingbook } from './schema/kingbook.schema';
import { CreateKingbookDto } from 'src/dto/create-kingbook.dto';
import { UpdateKingbookDto } from 'src/dto/update-kingbook.dto';

@Controller('kingbooks')
export class KingbookController {
    constructor (private kingbookService: KingbookService) {}

    @Get()
    async getAllKingbooks(): Promise <Kingbook[]> {
        return this.kingbookService.findAll();
    }

    @Post()
    async createKingbook(
        @Body()
        kingbook: CreateKingbookDto,
    ): Promise <Kingbook> {
        return this.kingbookService.create(kingbook);
    }

    @Get(':id')
    async getKingbook(
        @Param('id')
        id: string,
    ): Promise <Kingbook> {
        return this.kingbookService.findById(id);
    }

    @Put(':id')
    async updateKingbook(
        @Param('id')
        id: string,
        @Body()
        kingbook: UpdateKingbookDto,
    ): Promise <Kingbook> {
        return this.kingbookService.updateById(id, kingbook);
    }

    @Delete(':id')
    async deleteKingbook(
        @Param('id')
        id: string,
    ): Promise <Kingbook> {
        return this.kingbookService.deleteById(id);
    }
}
