import {ICart, IProduct} from "models/index";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICartState {
    product: ICart[],
    isLoading: boolean,
    error: string
}

const initialState: ICartState = {
    product: [],
    isLoading: false,
    error: ''
}

export const cartsSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        fetching(state) {
            state.isLoading = true
        },
        fetchingSuccess(state, action: PayloadAction<ICart[]>) {
            state.isLoading = false
            state.error = ''
            state.product = action.payload
        },
        fetchingError(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        fetchingAddToCartSuccess(state, action: PayloadAction<ICart>) {
            state.isLoading = false
            state.error = ''
            state.product.push(action.payload)
        },
        fetchingRemoveFromCart(state, action: PayloadAction<ICart>) {
            state.isLoading = false
            state.error = ''
            state.product.filter(id => id !== action.payload)
        },
        fetchClearCart(state, action: PayloadAction<ICart[]>) {
            state.isLoading = false
            state.error = ''
            state.product = action.payload
        }
    }
})

export default cartsSlice.reducer