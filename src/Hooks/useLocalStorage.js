import { useEffect, useState } from 'react'
import { gettingItem, settingItem } from '@/Utils/LocalStorage.js'

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        return gettingItem(key) || initialValue
    })

    useEffect(() => {
        settingItem(key, value)
    }, [value])

    return [value, setValue]
}

export default useLocalStorage
