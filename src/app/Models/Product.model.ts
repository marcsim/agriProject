import { Category } from './Category.model';

export class Product {
    id: number;
    img?: string;
    name?: string;
    type?: Category;
    weight?: number;
    quantity?: number;
    pricePerKilo?: number;
    ref?: string;
}
