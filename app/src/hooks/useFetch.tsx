import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import axios from 'axios'

function useFetch(url: string, setLoading: Dispatch<SetStateAction<boolean>>) {
    const [data, setData] = useState<any[] | undefined>()
    const [error, setError] = useState(null)

    useEffect(() => {
        console.log('usfetch')
        setLoading(true)
        axios
            .get(url)
            .then((res) => {
                console.log(res)
                setData(res.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url])

    return { data, error }
}

export default useFetch
