import { Category } from "src/kingbook/schema/kingbook.schema";


export class UpdateKingbookDto{
    readonly title: string; 
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}