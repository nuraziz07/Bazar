import { useNavigate } from 'react-router-dom'
import { useContext, useMemo } from 'react'
import { Context } from '@/Provider/context.jsx'

const Card = ({ data }) => {
    const { state, dispatch } = useContext(Context)
    const navigate = useNavigate()

    const filtered = useMemo(() => {
        if (state.term.length === 0) {
            return data
        }
        return data.filter(
            (item) => item.title.toLowerCase().indexOf(state.term) > -1
        )
    }, [state.term])

    return (
        <>
            {filtered?.map((item, index) => {
                return (
                    <div
                        className={
                            'break-inside-avoid mb-5 border border-gray-200 h-fit rounded-[20px]'
                        }
                        key={index}
                    >
                        <img
                            src={item.img}
                            onClick={() => navigate(`/detail/${item.id}`)}
                            className={'rounded-t-[20px] w-full h-auto'}
                            alt=""
                        />
                        <h3 className={'font-[600] text-[16px] pt-3 pl-1'}>
                            {item.price}
                            <span className={'text-[13px] pl-1'}>
                                {item.currency}
                            </span>
                        </h3>
                        <p
                            className={
                                'font-[300] text-[12px] leading-[15px] tracking-[-0.2px] pt-2 px-1'
                            }
                        >
                            {item.title}
                        </p>
                        <div className={'flex pt-2 px-1 justify-between'}>
                            <h4 className={'font-[400] text-[12px]'}>
                                {item.location}
                            </h4>
                            <h4 className={'font-[400] text-[12px]'}>
                                {item.year}
                                {item.date}
                            </h4>
                        </div>
                        <button
                            onClick={() =>
                                dispatch({ type: 'adding', payload: item })
                            }
                            className={
                                'bg-[#E1084D] w-full text-[14px] text-white py-2 rounded-b-[20px] mt-3'
                            }
                        >
                            Саватчага кушиш
                        </button>
                    </div>
                )
            })}
        </>
    )
}

export default Card
