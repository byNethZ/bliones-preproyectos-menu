import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Item, sliceItemState } from '../../model/item.interface'

const initialState: sliceItemState = {
  value: []
}

export const styleMenuSlice = createSlice({
  name: 'styleMenu',
  initialState,
  reducers: {
    addItemStyle: (state, action: PayloadAction<Item>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.push(action.payload)
    },
    deleteItemStyle: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter( (el: Item) => el.id !== action.payload)
    }
  }
})

export const { addItemStyle, deleteItemStyle } = styleMenuSlice.actions

export default styleMenuSlice.reducer