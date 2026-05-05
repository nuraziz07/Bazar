import { useState } from 'react'
import {
    BellDot,
    BellRing,
    BookCheck,
    Camera,
    LayoutGrid,
    LogOut,
    MessageCircleQuestionMark,
} from 'lucide-react'
import useLocalStorage from '@/Hooks/useLocalStorage.js'
import { Link } from 'react-router-dom'

const Profile = () => {
    const [color, setColor] = useState('Рус')
    const [toggle, setToggle] = useState(true)

    const [name, setName] = useLocalStorage('name', '')
    const [phoneNumber, setPhoneNumber] = useLocalStorage('phoneNumber', '')

    const clearing = () => {
        window.localStorage.clear()
    }

    return (
        <div>
            <div className={'px-7 pt-8 flex justify-between'}>
                <h1 className={'font-[600] text-[24px] tracking-[-0.22px]'}>
                    Созламалар
                </h1>
                <div className={'flex gap-5'}>
                    <Link to={'/notification'}>
                        <BellDot className={'text-[#6D7278]'} />
                    </Link>
                    <Link to={'/myaccount'}>
                        <LogOut
                            onClick={clearing}
                            className={'text-[#6D7278]'}
                        />
                    </Link>
                </div>
            </div>

            <div
                className={
                    'pt-25 shadow-[0px_-3px_6px] mt-15 rounded-t-[40px] shadow-gray-200  px-6'
                }
            >
                <label
                    className={
                        'bg-gray-200  w-[110px] h-[110px] absolute top-24 flex items-center justify-center rounded-[50%]'
                    }
                >
                    <Camera size={30} />
                    <input
                        type="file"
                        className={'hidden'}
                        accept={'image/*'}
                    />
                </label>

                <div
                    className={'w-full border border-gray-200  rounded-[20px]'}
                >
                    <div className={'border-b pl-5 pt-5 pb-4 border-gray-200'}>
                        <h3 className={'font-[500] text-[11px] text-[#323642]'}>
                            Имя
                        </h3>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={'Николай'}
                            className={'font-[600] text-[#323642] text-[14px]'}
                        />
                    </div>

                    <div className={'border-b pl-5 pt-5 pb-4 border-gray-200'}>
                        <h3 className={'font-[500] text-[11px] text-[#323642]'}>
                            Номер телефона
                        </h3>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder={'(998) 90 909 99 00'}
                            className={'font-[600] text-[#323642] text-[14px]'}
                        />
                    </div>

                    <div className={'pl-5 pb-4 pt-5'}>
                        <h3 className={'font-[500] text-[11px] text-[#323642]'}>
                            Дата рождения
                        </h3>
                        <input
                            type="text"
                            placeholder={'Не указан'}
                            className={'font-[600] text-[#323642] text-[14px]'}
                        />
                    </div>
                </div>

                <h1
                    className={
                        'text-[#323642] text-[14px] font-[500] pt-5 pl-1'
                    }
                >
                    Язык приложения
                </h1>
                <div className={'pt-5 flex justify-evenly gap-5'}>
                    <button
                        onClick={() => setColor('Рус')}
                        className={` ${color === 'Рус' ? 'bg-[#E1084D] text-white' : 'bg-gray-200 text-black'} w-full rounded-[8px]  py-3`}
                    >
                        РУС
                    </button>

                    <button
                        onClick={() => setColor('Узб')}
                        className={` ${color === 'Узб' ? 'bg-[#E1084D] text-white' : 'bg-gray-200 text-black'} w-full rounded-[8px]  py-3`}
                    >
                        УЗБ
                    </button>

                    <button
                        onClick={() => setColor('Ozb')}
                        className={` ${color === 'Ozb' ? 'bg-[#E1084D] text-white' : 'bg-gray-200 text-black'} w-full rounded-[8px] py-3`}
                    >
                        O’ZB
                    </button>
                </div>

                <div
                    className={
                        'w-full  mt-7  border border-gray-200  rounded-[20px]'
                    }
                >
                    <div
                        className={
                            'border-b justify-between flex  px-7 pt-5 pb-4 border-gray-200'
                        }
                    >
                        <div className={'flex gap-3'}>
                            <BellRing className={'text-[#E1084D]'} />
                            <h3>Уведомления</h3>
                        </div>
                        <button
                            className={`toggle-btn ${toggle ? 'toggled' : ''}`}
                            onClick={() => setToggle((prev) => !prev)}
                        >
                            <div className={'thumb'}></div>
                        </button>
                    </div>

                    <div
                        className={'border-b   px-7 pt-5 pb-4 border-gray-200'}
                    >
                        <div className={'flex gap-3'}>
                            <MessageCircleQuestionMark
                                className={'text-[#E1084D]'}
                            />
                            <h3>Часто задаваемые вопросы</h3>
                        </div>
                    </div>

                    <div
                        className={
                            'border-b justify-between flex  px-7 pt-5 pb-4 border-gray-200'
                        }
                    >
                        <div className={'flex gap-3'}>
                            <LayoutGrid className={'text-[#E1084D]'} />
                            <h3>О приложении</h3>
                        </div>
                    </div>

                    <div
                        className={
                            'border-b justify-between flex  px-7 pt-5 pb-4 border-gray-200'
                        }
                    >
                        <div className={'flex gap-3 pb-18'}>
                            <BookCheck className={'text-[#E1084D]'} />
                            <h3>Публичная оферта</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
