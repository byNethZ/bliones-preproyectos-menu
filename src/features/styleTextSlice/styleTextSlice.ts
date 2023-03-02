import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, sliceItemState } from "../../model/item.interface";

const initialState: sliceItemState = {
    value: []
}

export const styleTextSlice = createSlice({
    name: 'styleText',
    initialState,
    reducers: {
        addItemText: (state, action: PayloadAction<Item>) =>{
            state.value.push(action.payload);
        },
        deleteItemText: (state, action: PayloadAction<number>) => {
            state.value = state.value.filter(( el: Item ) => el.id !== action.payload ) 
        }
    }
})

export const { addItemText, deleteItemText } = styleTextSlice.actions;

export default styleTextSlice.reducer;