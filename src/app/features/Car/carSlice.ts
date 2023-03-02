import { createSlice } from "@reduxjs/toolkit";
import { ISliceCar } from "../interfaces/ICar";

const initialState: ISliceCar = {
    car: {
        listProducts: [],
        valueTotal: 0,
        taxImpost: 0,
    },
    info: {
        isError: false,
        message: undefined
    },
    loading: false,
}

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        addProduct: ({ car }: ISliceCar, { payload } ) => {
            console.log(payload, car?.listProducts);
            //  car?.listProducts.filter(item => console.log(item));
            // console.log(qntTemp.name.toString().toLowerCase().trim());
            // if(qntTemp){
                const product = car.listProducts.find((item: any) => item === payload.name);

            // }else {
                car?.listProducts.push({
                    name: payload.name,
                    price: payload.price,
                    qnt: 1
                });
            // }

            if(car) {
                car.valueTotal = car?.valueTotal + payload.price
        }
    }
}})

export const { addProduct } = carSlice.actions;

export default carSlice.reducer;