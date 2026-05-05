import { useParams } from 'react-router-dom'
import useAxios from '@/Hooks/useAxios.js'
import { useMemo } from 'react'

const useDetail = (url) => {
    const { data, loading, error } = useAxios(url)
    const { id } = useParams()

    const filteredData = useMemo(() => {
        return data.filter((item) => item.id == id)
    }, [data, id])

    return { filteredData }
}

export default useDetail
