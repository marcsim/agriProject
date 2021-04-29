import { Address } from './Address.model';
import { Category } from './Category.model';
import { Product } from './Product.model';

export class Farmer {
    id: number; //Voir id avec Firebase
    numSiret: string;
    address: Address;
    isBio: boolean;
    products: Product[];
    specialite: Category[];
}
