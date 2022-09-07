import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBrands} from "models/index";

interface IBrandsState {
    brands: IBrands,
    isLoading: boolean,
    error: string
}

const initialState: IBrandsState = {
    brands: {} as IBrands,
    isLoading: false,
    error: ''
}


export const brandsSlice = createSlice({ // create slice is a function that included 3 args in CreateSliceOptions
    initialState, // Initial state is state be must require
    name: 'brands', // Name must require
    reducers: { // CaseReducer must require | Reducer include options.reducers or empty object
        fetching(state) { // reducerNames Object.keys(reducers)
            state.isLoading = true
        },
        fetchingSuccessBrands(state, action: PayloadAction<IBrands>) {
            state.isLoading = false,
                state.brands = action.payload,
                state.error = ''
        },
        fetchingError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
    }
})

export default brandsSlice.reducer