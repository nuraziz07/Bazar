import { useEffect, useState } from 'react'
import axios from 'axios'

const useAxios = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios
            .get(url)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url])

    return { data, loading, error }
}

export default useAxios
