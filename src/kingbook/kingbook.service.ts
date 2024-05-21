import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Kingbook } from './schema/kingbook.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class KingbookService {
    constructor(
        @InjectModel (Kingbook.name)
        private kingbookModel: mongoose.Model<Kingbook>
    ) {}

    async findAll(): Promise<Kingbook[]> {
        const kingbooks = await this.kingbookModel.find();
        return kingbooks;
    }

    async create(kingbook: Kingbook): Promise<Kingbook> {
        const res = await this.kingbookModel.create(kingbook);
        return res;
    }

    async findById(id: string): Promise<Kingbook> {
        const kingbook = await this.kingbookModel.findById(id);

        if(!kingbook) {
            throw new NotFoundException('Kingbook Not found');
        }
        return kingbook;
    }

    async updateById(id: string, kingbook: Kingbook): Promise<Kingbook> {
        return await this.kingbookModel.findByIdAndUpdate(id, kingbook, {
            new: true,
            runValidators: true,
        });
    }
    
    async deleteById(id: string): Promise<Kingbook> {
        return await this.kingbookModel.findByIdAndDelete(id);
    }
}
