import { ChevronLeft, Flame, Heart, Share2 } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SameFile from '@/Components/Cards/SameFile.jsx'
import { useMemo, useState } from 'react'
import useAxios from '@/Hooks/useAxios.js'
import useDetail from '@/Hooks/useDetail.js'

const CardDetail = () => {
    const [toggle, setToggle] = useState(false)

    const { filteredData } = useDetail('/products.json')
    const navigate = useNavigate()

    const changingColor = () => {
        setToggle((prev) => !prev)
    }

    return (
        <>
            {filteredData.map((item, index) => {
                return (
                    <div key={index}>
                        <div className={'flex pt-7 px-4 justify-between'}>
                            <ChevronLeft
                                onClick={() => navigate(-1)}
                                className={'text-[#0091FF]'}
                                size={30}
                            />
                            <div className={'flex gap-3 pb-3 justify-between'}>
                                <Share2
                                    className={'text-[#0091FF]'}
                                    size={25}
                                />
                                <Heart
                                    onClick={changingColor}
                                    className={`${toggle ? 'text-red-700' : 'text-[#0091FF]'}`}
                                    size={25}
                                />
                            </div>
                        </div>
                        <div className={'h-[90vh] overflow-scroll'}>
                            <img
                                src={`/${item.img}`}
                                className={
                                    'w-full px-2 mt-5 rounded-[40px] h-auto]'
                                }
                                alt="vdfv"
                            />
                            <h2 className={'font-[500] text-[18px] px-5 pt-5'}>
                                {item.title}
                            </h2>

                            <div className={'flex px-5 pt-4 justify-between'}>
                                <h1
                                    className={
                                        'text-[#E1084D] font-[600] text-[22px]'
                                    }
                                >
                                    {item.price} {item.currency}
                                </h1>
                                <div
                                    className={
                                        'flex gap-3 items-center justify-between'
                                    }
                                >
                                    <Flame className={'text-[#FA6400]'} />
                                    <h4
                                        className={
                                            'text-[#FA6400] font-[600] text-[12px]'
                                        }
                                    >
                                        Ажойиб нарх
                                    </h4>
                                </div>
                            </div>
                            <p
                                className={
                                    'px-5 pt-5 text-[#3A3F46] font-[400] text-[15px] leading-[27px]'
                                }
                            >
                                {item.desc}
                            </p>
                            <h2
                                className={
                                    'font-[600] text-[20px] leading-[100%] tracking-[-0.18px] pt-5 pl-5'
                                }
                            >
                                Ўхшаш эълонлар
                            </h2>

                            <div
                                className={
                                    'w-full mt-5 px-5 h-[40vh] overflow-scroll'
                                }
                            >
                                <SameFile />
                            </div>
                            <div
                                className={
                                    'flex mt-5 px-4 gap-4 mb-10 pb-10 justify-evenly'
                                }
                            >
                                <button
                                    onClick={() => navigate('/success')}
                                    className={
                                        'w-full py-3 bg-[#E1084D] text-[14px] font-[600] text-white rounded-[8px]'
                                    }
                                >
                                    Кўнгирок килиш
                                </button>
                                <button
                                    onClick={() => navigate('/home')}
                                    className={
                                        'w-full py-3 text-[#E1084D] text-[14px] font-[600] bg-white rounded-[8px] border border-[#E1084D]'
                                    }
                                >
                                    Хабар
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CardDetail
