import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ICategories } from "models";

interface ICartState {
    categories: ICategories,
    categories2: ICategories,
    categories3: ICategories,
    isLoading: boolean,
    error: string
}

const initialState: ICartState = {
    categories: {} as ICategories,
    categories2: {} as ICategories,
    categories3: {} as ICategories,
    isLoading: false,
    error: ''
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        fetching(state) {
            state.isLoading = true
        },
        fetchingSuccessCategories(state, action: PayloadAction<ICategories>) {
          state.isLoading = false,
          state.categories = action.payload,
          state.error = ''
        },
        fetchingError(state, action: PayloadAction<string>) {
          state.error = action.payload
      },
    }
})

export default categoriesSlice.reducer