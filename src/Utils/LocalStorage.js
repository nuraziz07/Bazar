export function settingItem(key, number) {
    try {
        localStorage.setItem(key, JSON.stringify(number))
    } catch (err) {
        console.log(err)
    }
}
export function gettingItem(key) {
    try {
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : undefined
    } catch (err) {
        console.log(err)
    }
}
