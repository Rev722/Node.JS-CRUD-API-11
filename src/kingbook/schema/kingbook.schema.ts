import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum Category {
    DAVID = 'KING',
    MOSES = 'PROPHET',
    SOLOMON = 'WISEMAN',
}

@Schema({
    timestamps: true,
})

export class Kingbook {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;
}

export const KingbookSchema = SchemaFactory.createForClass(Kingbook)