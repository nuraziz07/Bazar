import { createContext, useReducer } from 'react'
import useAxios from '@/Hooks/useAxios.js'

const initialValue = {
    term: '',
    arr: [],
}

export const Context = createContext()

const reducer = (state = initialValue, action) => {
    const { type, payload } = action
    switch (type) {
        case 'searching': {
            return { ...state, term: payload }
        }
        case 'adding': {
            const existing = state.arr.find((item) => item.id === payload.id)

            if (existing) {
                return {
                    ...state,
                    arr: state.arr.map((item) =>
                        item.id === payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }
            }
            return {
                ...state,
                arr: [...state.arr, { ...payload, quantity: 1 }],
            }
        }

        case 'reset': {
            return { ...state, arr: [] }
        }
        case 'decrementing': {
            return {
                ...state,
                arr: state.arr.map((item) =>
                    item.id === payload.id
                        ? {
                              ...item,
                              quantity:
                                  item.quantity > 0 ? item.quantity - 1 : 0,
                          }
                        : item
                ),
            }
        }

        case 'removing': {
            return {
                ...state, arr: state.arr.filter((item) => item.id !== payload.id)
            }
        }
        default:
            return state
    }
}

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    )
}
export default Provider
