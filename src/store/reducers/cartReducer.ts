import {CartActionTypes, ICartAction, ICartState} from "types/";

const initialState: ICartState = {
    products: [],
    page: 1,
    error: null,
    limit: 10,
    isLoading: false
}

export const cartReducer = (state = initialState, action: ICartAction): ICartState => {
    switch (action.type) {
        case CartActionTypes.FETCH_CART:
            return { ...state, isLoading: true }
        case CartActionTypes.FETCH_CART_SUCCESS:
            return { ...state, isLoading: false, products: action.payload }
        case CartActionTypes.FETCH_CART_ERROR:
            return { ...state, isLoading: false, error: action.payload }
        default:
            return state
    }
}
