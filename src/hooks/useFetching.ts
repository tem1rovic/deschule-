import { useState } from "react"

export const useFetching = (callback: (...args: any) => void) => {
    const [ isLoading, setLoading ] = useState<boolean>(false)
    const [ isError, setError ] = useState<any>(false)
    const [ reportError, setReportError ] = useState<string>()

    const fetch = async (...args: any) => {
        try {
            setLoading(true)
            await  callback(...args)
        } catch (e: any) {
            setError(true)
            setReportError(e.request.responseText)
        } finally {
            setLoading(false)
        }
    }
    return [ fetch, isLoading, isError, reportError ]
}