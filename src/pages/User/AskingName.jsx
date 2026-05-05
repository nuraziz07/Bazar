import { Image } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { gettingItem, settingItem } from '@/Utils/LocalStorage.js'

const AskingName = () => {
    const [name, setName] = useState(() => {
        return gettingItem('name') || ''
    })

    useEffect(() => {
        settingItem('name', name)
    })

    const navigate = useNavigate()
    return (
        <div className={'px-8'}>
            <h1 className={'font-[600] text-[22px] pt-8'}>
                Профиль маълумотлари
            </h1>
            <div className={'w-full flex justify-center pt-10'}>
                <label className={'bg-[#EEEEF0] p-14 rounded-[50%]'}>
                    <input
                        type="file"
                        className={'hidden'}
                        accept={'image/*'}
                    />
                    <Image size={50} />
                </label>
            </div>
            <h1 className={'font-[500] text-[16px] tracking-[-0.15px] pt-10'}>
                Исмингиз
            </h1>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder={'Нуразиз'}
                className={
                    'py-4 bg-[#EEEEF0] w-full pl-3 mt-5 rounded-[6px] text-black'
                }
            />

            <div className={'flex mt-30 gap-3 justify-between'}>
                <button
                    onClick={() => navigate('/profile')}
                    className={
                        'w-full py-2 bg-[#E1084D] text-[14px] font-[600] text-white rounded-[8px]'
                    }
                >
                    Сақлаш
                </button>
                <button
                    onClick={() => navigate('/sendingcode')}
                    className={
                        'w-full py-2 text-[#E1084D] text-[14px] font-[600] bg-white rounded-[8px] border border-[#E1084D]'
                    }
                >
                    Бекор қилиш
                </button>
            </div>
        </div>
    )
}

export default AskingName
