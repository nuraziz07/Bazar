import { Search, ShoppingCart, SlidersHorizontal } from 'lucide-react'
import { useContext } from 'react'
import { Context } from '@/Provider/context.jsx'
import { Link } from 'react-router-dom'

const Filter = ({ opening }) => {
    const { state, dispatch } = useContext(Context)

    const overall = state.arr.map((items) => items.quantity)

    const sum = overall.reduce((prev, cur) => prev + cur, 0)

    return (
        <div className={'flex w-full justify-between items-center px-4'}>
            <div
                className={
                    'bg-[#EEEEF0] flex items-center px-5 w-full rounded-[5px]'
                }
            >
                <Search className={'absolute text-[#6D7278]'} size={18} />
                <input
                    onChange={(e) =>
                        dispatch({ type: 'searching', payload: e.target.value })
                    }
                    type="text"
                    className={
                        'text-[#6D7278] text-[13px] font-[300] py-3 pl-7'
                    }
                    placeholder={'Махсулот излаш'}
                />
            </div>
            <SlidersHorizontal
                onClick={() => opening(true)}
                size={40}
                className={
                    'text-[#E1084D]  left-80 cursor-pointer pl-2 pr-2 font-[600]'
                }
            />
            <Link to={'/basket'}>
                <ShoppingCart
                    className={'text-[#E1084D] absolute cursor-pointer'}
                    size={23}
                />
                <h1
                    className={`relative  bg-white border bottom-3 border-[#E1084D] px-[5px] text-[#E1084D] text-[13px] left-3 rounded-[50%]`}
                >
                    {sum}
                </h1>
            </Link>
        </div>
    )
}

export default Filter
