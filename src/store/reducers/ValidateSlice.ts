import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IValidateState {
    login_error: string,
    register_error: string,
    discount_code_error: string
}

const initialState: IValidateState = {
    login_error:  '',
    register_error: '',
    discount_code_error: ''
}

export const validatesSlice = createSlice({
    name: 'validates',
    initialState,
    reducers: {
        fetchLogin_error(state, action: PayloadAction<any>) {
            state.login_error = action.payload
        },
        fetchRegister_error(state, action: PayloadAction<any>) {
            state.register_error = action.payload
        },
        fetchDiscountCode_error(state, action: PayloadAction<any>) {
            state.discount_code_error = action.payload
        }
    }
})

export default validatesSlice.reducer