import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, sliceItemState } from "../../model/item.interface";

const initialState: sliceItemState = {
    value: []
}

export const styleDesignSlice = createSlice({
    name: 'styleDesign',
    initialState,
    reducers: {
        addItemDesign: (state, action: PayloadAction<Item>) => {
            state.value.push(action.payload);
        },
        deleteItemDesign: (state, action: PayloadAction<number>) => {
            state.value = state.value.filter((el: Item) => el.id !== action.payload)
        }
    }
})

export const { addItemDesign, deleteItemDesign } = styleDesignSlice.actions;

export default styleDesignSlice.reducer;