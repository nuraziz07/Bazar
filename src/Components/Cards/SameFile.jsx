import React from 'react'
import { useNavigate } from 'react-router-dom'
import useAxios from '@/Hooks/useAxios.js'

const SameFile = () => {
    const navigate = useNavigate()

    const { data, loading, error } = useAxios('/products.json')

    const filteredData = data?.filter((item) => item.location === 'Наманган')

    return (
        <div className={'grid-rows-1 grid gap-7 grid-cols-2'}>
            <>
                {filteredData.map((item, index) => {
                    return (
                        <div
                            onClick={() => navigate(`/detail/${item.id}`)}
                            key={index}
                        >
                            <img
                                src={`/${item.img}`}
                                className={'rounded-[20px] w-[213px] h-auto'}
                                alt=""
                            />
                            <p
                                className={
                                    'font-[300] text-[13px] leading-[15px] tracking-[-0.2px] pt-2 pl-1'
                                }
                            >
                                {item.title}
                            </p>
                        </div>
                    )
                })}
            </>
        </div>
    )
}

export default SameFile
