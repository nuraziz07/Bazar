import Wolf2 from '@/assets/svg/optom.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { gettingItem, settingItem } from '@/Utils/LocalStorage.js'

const AskingNumber = () => {
    const navigate = useNavigate()

    const [phoneNumber, setPhoneNumber] = useState(() => {
        const item = gettingItem('phoneNumber')

        return +item || ''
    })
    useEffect(() => {
        settingItem('phoneNumber', phoneNumber)
    }, [phoneNumber])

    return (
        <div className={''}>
            <h1 className={'font-[600] text-[24px] px-8 pt-5'}>
                Тизимга киринг
            </h1>
            <div
                className={
                    'mt-10 shadow-[0_-10px_6px] shadow-gray-100 rounded-t-[40px] pt-10'
                }
            >
                <div className={'w-full flex justify-center'}>
                    <img src={Wolf2} className={'flex justify-center'} alt="" />
                </div>

                <div className={'w-full gap-5 pt-10 flex px-4 justify-center'}>
                    <select
                        name=""
                        className={
                            'w-fit pl-4 text-[#3A3F46] font-[700] text-[20px] py-4 bg-[#EEEEF0] rounded-xl'
                        }
                        id=""
                    >
                        <option value="">+998</option>
                        <option value="">+1</option>
                        <option value="">+23</option>
                        <option value="">+0392</option>
                        <option value="">+34</option>
                    </select>
                    <input
                        maxLength={'9'}
                        className={
                            'w-full pl-4 text-[#3A3F46] font-[700] text-[20px] py-4 bg-[#EEEEF0] rounded-xl'
                        }
                        type="text"
                        max={9}
                        placeholder={'-- --- -- --'}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>

                <div className={'px-8'}>
                    <p
                        className={
                            'mt-7 font-[400] text-[14px] leading-[22px] text-[#6D7278]'
                        }
                    >
                        Хурматли Optombozor мижози мобил иловамиздан тулаконли
                        фойдаланиш учун руйхатдан утишингиз керак булади!{' '}
                    </p>
                    <button
                        onClick={() => navigate('/sendingcode')}
                        className={
                            'w-full  py-3 text-white mt-8 bg-[#E1084D] rounded-xl'
                        }
                    >
                        Кириш
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AskingNumber
