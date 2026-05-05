import React, { useContext } from 'react'
import { Minus, Plus, Trash } from 'lucide-react'
import { Context } from '@/Provider/context.jsx'
import Empty from '@/assets/png/empty.png'

const BasketItem = () => {
    const { state, dispatch } = useContext(Context)
    return (
        <>
            {state.arr.length > 0 ? (
                state.arr.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                'flex justify-between transition-all duration-300 ease hover:scale-103 mt-3 border gap-3 pr-5 rounded-[20px] border-gray-300 items-center'
                            }
                        >
                            <img
                                src={item.img}
                                className={'w-[100px] h-auto rounded-[15px]'}
                                alt=""
                            />
                            <div className={'py-4'}>
                                <h1 className={'font-[600] text-[13px]'}>
                                    {item.title}
                                </h1>
                                <h5 className={'font-[300] text-gray-600'}>
                                    {item.price} {item.currency}
                                </h5>
                                <div className={'flex pt-2 gap-3'}>
                                    <Minus
                                        className={
                                            'transition-all duration-300 ease active:scale-90'
                                        }
                                        onClick={() =>
                                            dispatch({
                                                type: 'decrementing',
                                                payload: item,
                                            })
                                        }
                                    />
                                    <h4
                                        className={
                                            'bg-[#EEEEF0] text-black px-4 rounded-[8px] border border-gray-700'
                                        }
                                    >
                                        {item.quantity}
                                    </h4>
                                    <Plus
                                        className={
                                            'transition-all duration-300 ease active:scale-90'
                                        }
                                        onClick={() => {
                                            dispatch({
                                                type: 'adding',
                                                payload: item,
                                            })
                                        }}
                                    />
                                </div>
                            </div>
                            <Trash
                                className={
                                    'transition-all duration-300 ease active:scale-103'
                                }
                                size={30}
                                onClick={() =>
                                    dispatch({
                                        type: 'removing',
                                        payload: item,
                                    })
                                }
                            />
                        </div>
                    )
                })
            ) : (
                <>
                    <img src={Empty} alt="" />
                    <h1 className={'text-center font-[600] text-[20px] pt-3'}>
                        Саватингизда махсулот йук
                    </h1>
                </>
            )}
        </>
    )
}

export default BasketItem
