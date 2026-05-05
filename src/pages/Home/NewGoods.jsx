import { useContext, useMemo } from 'react'
import useAxios from '@/Hooks/useAxios.js'
import { useNavigate } from 'react-router-dom'
import { Context } from '@/Provider/context.jsx'

const NewGoods = () => {
    const navigate = useNavigate()

    const { state, dispatch } = useContext(Context)

    const { data } = useAxios('/products.json')

    const filteredItems = data.filter((item) => item.year > 2023)

    const filtered = useMemo(() => {
        if (state.term.length == 0) {
            return filteredItems
        } else {
            return filteredItems.filter(
                (item) => item.title.toLowerCase().indexOf(state.term) > -1
            )
        }
    }, [state.term])

    return (
        <div className={'columns-2 gap-5'}>
            {filteredItems?.map((item, index) => {
                return (
                    <div
                        className={
                            'break-inside-avoid mb-5 border transition-all duration-300 ease hover:scale-103 cursor-pointer border-gray-200 h-fit rounded-[20px]'
                        }
                        onClick={() => navigate(`/detail/${item.id}`)}
                        key={index}
                    >
                        <img
                            src={item.img}
                            className={'rounded-t-[20px] w-full h-auto'}
                            alt=""
                        />
                        <h3 className={'font-[600] text-[16px] pt-3 pl-1'}>
                            {item.price}
                            <span className={'text-[13px]'}>
                                {item.currency}
                            </span>
                        </h3>
                        <p
                            className={
                                'font-[300] text-[13px] leading-[15px] tracking-[-0.2px] pt-2 px-1'
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
                            className={
                                'bg-[#E1084D] w-full text-[14px] text-white py-2 rounded-b-[20px] mt-3'
                            }
                        >
                            Саватчага кушиш
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default NewGoods
