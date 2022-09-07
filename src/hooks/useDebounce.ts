import {useEffect, useState} from "react";


function useDebounce<T>(value: string, delay?:number) {
    const [ debouncedValue, setDebouncedValue ] = useState<string>()

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

        return () => {
            clearTimeout(timer)
        }
    }, [ value, delay ])

    return debouncedValue
}

export default useDebounce