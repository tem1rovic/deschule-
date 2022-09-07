import {ChangeEvent, useCallback, useState} from "react";

const  useInput = (initialValue: string ) => {
    const [ value, setValue ] = useState<string>(initialValue)


    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>, callback?: () => void) => {
        setValue(e.target.value)
        callback && callback()
    }, [setValue])

    return {
        value, onChange, setValue
    }
}

export default useInput