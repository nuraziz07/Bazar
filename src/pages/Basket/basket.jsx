import React, { useContext } from 'react'
import { ChevronLeft, Trash } from 'lucide-react'
import BasketItem from '@/Components/Basket/basketItem.jsx'
import { useNavigate } from 'react-router-dom'
import { Context } from '@/Provider/context.jsx'

const Basket = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useContext(Context)

    const price = state.arr.map((item) => item.price * item.quantity)
    const priceOverall = price.reduce((prev, cur) => prev + cur, 0)

    return (
        <div>
            <div
                className={
                    'flex justify-between shadow-sm shadow-gray-400 px-7 pb-4 pt-7'
                }
            >
                <ChevronLeft size={30} onClick={() => navigate(-1)} />
                <h1 className={'font-[600] text-[20px]'}>Саватча</h1>
                <Trash size={25} onClick={() => dispatch({ type: 'reset' })} />
            </div>

            <div className={'block h-[55vh] overflow-scroll px-10 pt-6'}>
                <BasketItem />
            </div>

            <div className={'mt-4 rounded-t-[30px] bg-gray-100 px-7'}>
                <div
                    className={
                        'flex py-5 border-b-[2px] border-gray-500 items-center justify-between'
                    }
                >
                    <h1 className={'text-[14px]'}>Махсулотлар сони:</h1>
                    <h4>{state.arr.length}</h4>
                </div>

                <div
                    className={
                        'flex py-5 border-b-[2px] border-gray-500 items-center justify-between'
                    }
                >
                    <h1 className={'text-[14px]'}>Етказиб бериш:</h1>
                    <h4>
                        {priceOverall * 0.04} <span>сум</span>
                    </h4>
                </div>

                <div
                    className={
                        'flex py-5 border-b-[2px] border-gray-500 items-center justify-between'
                    }
                >
                    <h1 className={'text-[14px]'}>Махсулотлар нархи:</h1>
                    <h4>
                        4900 <span>сум</span>
                    </h4>
                </div>

                <div className={'flex pt-5 pb-12 items-center justify-between'}>
                    <h1 className={'text-[15px]'}>Умумий сумма:</h1>
                    <h4>
                        {priceOverall} <span>сум</span>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Basket
