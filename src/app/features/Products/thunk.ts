import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchProductThunk = createAsyncThunk('products/getAll', async () => {
    try{
        const { data } = await api.get('/product').then(response => response);
        
        if(data) {
            return data;
        }

    }catch(error: any) {
        return error;
    }
})