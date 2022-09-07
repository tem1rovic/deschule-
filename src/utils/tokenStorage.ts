const ACCESS_KEY: string = 'access_token'
const REFRESH_KEY: string = 'refresh_token'

export const nextLocalStorage = (): Storage | undefined => {
    if (typeof window !== 'undefined') {
        return window.localStorage
    } else {
        return  undefined
    }
}

export const nextSessionStorage = (): Storage | undefined => {
    if (typeof window !== 'undefined') {
        return window.sessionStorage
    } else {
        return  undefined
    }
}

export const getAccessToken = () => {
    return nextLocalStorage()?.getItem(ACCESS_KEY)
}

export const getRefreshToken = () => {
    return nextLocalStorage()?.getItem(REFRESH_KEY)
}

export const setAccessToken = (token: string) => {
    return nextLocalStorage()?.setItem(ACCESS_KEY ,token)
}

export const setRefreshToken = (token: string) => {
    return  nextLocalStorage()?.setItem(REFRESH_KEY ,token)
}

export const removeAccessToken = () => {
    return nextLocalStorage()?.removeItem(ACCESS_KEY)
}

export const removeRefreshToken = () => {
    return nextLocalStorage()?.removeItem(REFRESH_KEY)
}

export const setSessionStorage = (name: string, value: string) => {
    return nextSessionStorage()?.setItem(name ,value)
}

export const getSessionStorage = (name: string) => {
    return nextSessionStorage()?.getItem(name)
}
