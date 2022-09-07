import {combineReducers} from "@reduxjs/toolkit";
import favoritesSliceReducer from "store/reducers/favoritesSlice";
import cartsSliceReducer from "store/reducers/cartSlice";
import categoriesSliceReducer from "./categoriesSlice";
import brandsSliceReducer from "store/reducers/brandsSlice";
import {productApi} from "services/ProductService";
import {brandsApi} from "services/BrandsService";
import {categoriesApi} from "services/CategoriesService";
import {cartApi} from "services/CartsService";
import {colorsApi} from "services/ColorService";


export const rootReducer = combineReducers({
    carts: cartsSliceReducer,
    favorites: favoritesSliceReducer,
    categories: categoriesSliceReducer,
    brands: brandsSliceReducer,
    [productApi.reducerPath]: productApi.reducer,
    [brandsApi.reducerPath]: brandsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [colorsApi.reducerPath]: colorsApi.reducer
})

export type RootState = ReturnType<typeof rootReducer>