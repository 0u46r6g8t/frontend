import { IGlobalReducer } from "./IGlobal";

export interface ISliceProduct extends IGlobalReducer{
    products: IProduct[] | undefined;
    filters: {
        prodTypes: any[];
    }
}


export interface IProduct {
    name: string;
    description: string;
    price: string;
    fk_type: string;
    tax_price: string;
}

export interface IProductCar {
    name: string;
    price: number;
    qnt: number;
}