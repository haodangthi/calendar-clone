import {useCallback} from "react"

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
    const debouncedFn = useCallback(debounce(callback, delay), [callback, delay])

    return debouncedFn
}

function debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: any
    return (...args: any[]) => {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}