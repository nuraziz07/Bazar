import Active from '@/assets/png/active.png'
import { Eye, Mail, Phone } from 'lucide-react'
import { useState } from 'react'
import MoreInfo from '@/pages/Wallet/Elonlar/MoreInfo.jsx'
import useAxios from '@/Hooks/useAxios.js'

const ActiveElon = () => {
    const [open, setOpen] = useState(false)

    const { data } = useAxios('/products.json')

    const filtering = data.filter((item) => item.id >= 11 && item.id <= 14)

    return (
        <div>
            {filtering.map((item, index) => {
                return (
                    <>
                        <div
                            className={
                                'flex items-center gap-2 pt-6 justify-between'
                            }
                        >
                            <img
                                src={item.img}
                                className={'w-[140px] h-[90px] rounded-[10px]'}
                                alt=""
                            />
                            <div>
                                <h2
                                    className={
                                        'font-[500] text-[13px] text-[#3A3F46] tracking-[-0.22px]'
                                    }
                                >
                                    {item.title}
                                </h2>
                                <h1
                                    className={
                                        'font-[700] text-[#3A3F46] text-[14px]'
                                    }
                                >
                                    {item.price} {item.currency}
                                </h1>

                                <div className={'flex gap-5  text-[#6D7278]'}>
                                    <div className={'flex items-center gap-1'}>
                                        <Eye size={16} />
                                        <h4>{item.views}</h4>
                                    </div>
                                    <div
                                        className={
                                            'flex items-center text-[#6D7278] gap-1'
                                        }
                                    >
                                        <Mail size={16} />
                                        <h4>{item.email}</h4>
                                    </div>
                                    <div
                                        className={
                                            'flex items-center text-[#6D7278] gap-1'
                                        }
                                    >
                                        <Phone size={16} />
                                        <h4>{item.phone}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex justify-between pt-4 px-4 gap-3'}>
                            <button
                                className={
                                    'w-full bg-[#E1084D] text-white font-[600] text-[14px] rounded-[5px] py-2'
                                }
                            >
                                Реклама қилиш
                            </button>
                            <button
                                onClick={() => setOpen(true)}
                                className={
                                    'w-full bg-white text-[#E1084D] rounded-[5px] font-[600] text-[14px] border-[2px] border-[#E1084D] py-2'
                                }
                            >
                                Тепега кўтариш
                            </button>
                        </div>
                        <MoreInfo open={open} close={setOpen} />
                    </>
                )
            })}
        </div>
    )
}
export default ActiveElon
