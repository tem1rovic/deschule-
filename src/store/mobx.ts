import {makeAutoObservable} from "mobx";
import axios from "axios";
import AuthService from "services/AuthService";
import {AuthResponse, RefreshResponse} from "models/response/AuthResponse";
import {API_URL} from "services/interseptors";
import {
    getAccessToken, getRefreshToken,
    removeAccessToken, removeRefreshToken,
    setAccessToken,
    setRefreshToken
} from "utils/tokenStorage";
import {IProductsQuery} from "models/index";


export default class AuthStore {
    isAuth = !!(getAccessToken())
    isLoading = false
    showModal = false
    errorStatus = false
    errorText = ''

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool
    }

    setLoading(bool: boolean) {
        this.isLoading = bool
    }

    setShowModal(bool: boolean) {
        this.showModal = bool
    }

    setErrorStatus(bool: boolean) {
        this.errorStatus = true
    }
    setErrorText(str: string) {
        this.errorText = str
    }
    async login(username: string, password: string) {
        this.setLoading(true)
        try {
            const res = await AuthService.login(username, password)
            setAccessToken(res.data.access)
            setRefreshToken(res.data.refresh)
            localStorage.setItem('auth', 'true')
            this.setAuth(true)
            window.location.href = '/'
        } catch (e: any) {
            alert(e.response.data.detail)
        } finally {
            this.setLoading(false)
        }
    }

    async register(username: string, password: string, confirm_password: string) {
        this.setLoading(true)
        try {
            const res = await axios.post<AuthResponse>(`${API_URL}user/register/`, {username, password, confirm_password})
            setAccessToken(res.data.access)
            setRefreshToken(res.data.refresh)
            localStorage.setItem('auth', 'true')
            this.setAuth(true)
            this.setLoading(false)
            window.location.href = '/'
        } catch (e: any) {
            alert(e.response.data.message)
            this.setErrorText(e.response.data.message)
        }
    }

    async logout() {
        this.setLoading(true)
        try {
            removeAccessToken()
            removeRefreshToken()
            localStorage.removeItem('auth')
            this.setAuth(false)
            this.setLoading(false)
        } catch (e:any) {
            console.log(e.message)
            this.setErrorStatus(e.response.status)
        }
    }

    async checkAuth() {
        this.setLoading(true)
        if (getRefreshToken()) {
            try {
                const res = await axios.post<RefreshResponse>(`${API_URL}   me/refresh/`, { refresh: localStorage.getItem('refresh_token') })
                setAccessToken(res.data.access)
                localStorage.setItem('auth', 'true')
                this.setAuth(true)
            } catch (e: any) {
                console.log(e.message)
            } finally {
                this.setLoading(false)
            }
        }
    }

}

export class FilterState implements IProductsQuery {

    page?: number = 1
    page_size?: number = 35
    max_price?: number
    min_price?: number
    brand?: number
    category_search?: string
    search?: string
    colors?: number
    ordering?: number

    constructor() {
        makeAutoObservable(this)
    }

    setPage(page: number) {
        this.page = page
    }

    setPageSize(page_size: number) {
        this.page_size = page_size
    }

    setMaxPrice(max_price: number) {
        this.max_price  = max_price
    }

    setMinPrice(min_price: number) {
        this.min_price = min_price
    }

    setBrand(brand: number) {
        this.brand = brand
    }

    setCategorySearch(search: string) {
        this.category_search = search
    }

    setSearch(search: string) {
        this.search = search
    }

    setColor(color: number) {
        this.colors = color
    }

    setOrdering(ordering: number) {
        this.ordering = ordering
    }

    getAll() {
        return {
            page_size: this.page_size,
            page: this.page,
            max_price: this.max_price,
            min_price: this.min_price,
            brand: this.brand,
            categorySearch: this.category_search,
            search: this.search,
            colors: this.colors,
            ordering: this.ordering
        }
    }

}