import Girl from '@/assets/png/girl.png'
import { Bell, ChevronRight, ScrollText, Settings } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Monitoring from '@/pages/Wallet/monitoring.jsx'
import SettingsModal from '@/pages/Wallet/SettingsModal.jsx'

const Wallet = () => {
    const navigate = useNavigate()

    const [settings, setSettings] = useState(false)

    const [open, setOpen] = useState(false)

    const wallet = [
        {
            title: 'Танланланлан эълонлар',
            bio: 'Сиз киритган барча элонларингиз ушбу булимда сакланади',
        },
        {
            title: 'Охирги кўрганларим',
            bio: 'Сиз киритган барча элонларингиз ушбу булимда сакланади',
        },
        {
            title: 'Менинг компанияларим',
            bio: 'Сиз киритган барча элонларингиз ушбу булимда сакланади',
        },
        {
            title: 'Тулов ва хисоб',
            bio: 'Сиз киритган барча элонларингиз ушбу булимда сакланади',
        },
    ]

    return (
        <div className={'px-5'}>
            <div className={'flex justify-between  pt-4 items-center'}>
                <div
                    onClick={() => navigate('/profile')}
                    className={'flex items-center gap-2'}
                >
                    <img
                        src={Girl}
                        className={'w-[35px] h-[35px] rounded-[50%]'}
                        alt=""
                    />
                    <h3 className={'font-[400] text-[14px]'}>
                        Самира Темирова
                    </h3>
                    <ChevronRight
                        className={
                            'transition-all duration-300 ease hover:translate-x-[3px] cursor-pointer'
                        }
                    />
                </div>

                <div className={'flex flex items-center gap-4'}>
                    <Bell
                        onClick={() => navigate('/notification')}
                        className={'text-[#6D7278]'}
                    />
                    <Settings
                        onClick={() => setSettings(true)}
                        className={'text-[#6D7278]'}
                    />
                </div>
            </div>

            <div
                className={
                    'flex justify-between rounded-[20px] px-8 mt-7 py-4 items-center bg-[#E6EEF2]'
                }
            >
                <div>
                    <h3 className={'font-[400] text-[15px] text-[#181818]'}>
                        Балансингиз:
                    </h3>
                    <h1 className={'font-[700] texy-[19px] text-[#181818]'}>
                        950 000 сўм
                    </h1>
                </div>
                <h3
                    onClick={() => navigate('/toldirish')}
                    className={'font-[600] text-[#E1084D] text-[15px]'}
                >
                    Тўлдириш
                </h3>
            </div>

            <div className={'h-[70vh] mt-10 px-4 pb-7 overflow-scroll'}>
                <div className={'flex pb-4 border-b border-gray-200  gap-4'}>
                    <i>
                        <ScrollText
                            className={'text-[#E1084D] mt-3'}
                            size={30}
                        />
                    </i>
                    <div className={'pr-10'}>
                        <h1 className={'font-[600] text-[18px] text-[#181818]'}>
                            Сизнинг эълонларингиз
                        </h1>
                        <p className={'font-[400] text-[14px] text-[#6D7278]'}>
                            Сиз киритган барча элонларингиз ушбу булимда
                            сакланади
                        </p>

                        <div
                            onClick={() => navigate('/ActiveElonlar')}
                            className={
                                'bg-pink-100 rounded-xl transition-all duration-300 ease hover:scale-103 cursor-pointer flex items-center justify-between mt-3 px-3 py-3'
                            }
                        >
                            <h1
                                className={
                                    'font-[600] text-[13px] text-[#181818]'
                                }
                            >
                                Актив эълонлар
                            </h1>
                            <h3
                                className={
                                    'p-1 text-[12px] rounded-[50%] bg-white'
                                }
                            >
                                45
                            </h3>
                        </div>
                        <div
                            onClick={() => navigate('/NonActiveElonlar')}
                            className={
                                'bg-pink-100 rounded-xl transition-all duration-300 ease hover:scale-103 cursor-pointer flex items-center justify-between mt-3 px-5 py-3'
                            }
                        >
                            <h1
                                className={
                                    'font-[600] text-[13px] text-[#181818]'
                                }
                            >
                                Актив эмас эълонлар
                            </h1>
                            <h3
                                className={
                                    'p-1 text-[12px] rounded-[50%] bg-white'
                                }
                            >
                                45
                            </h3>
                        </div>
                    </div>
                </div>

                {wallet.map((item, index) => {
                    return (
                        <>
                            <div
                                onClick={() => setOpen(true)}
                                className={
                                    'flex pt-4 pb-3 border-b border-gray-200  gap-4'
                                }
                            >
                                <i>
                                    <ScrollText
                                        className={'text-[#E1084D] mt-3'}
                                        size={30}
                                    />
                                </i>
                                <div className={'pr-10'}>
                                    <h1
                                        className={
                                            'font-[600] text-[18px] text-[#181818]'
                                        }
                                    >
                                        {item.title}
                                    </h1>
                                    <p
                                        className={
                                            'font-[400] text-[14px] text-[#6D7278]'
                                        }
                                    >
                                        {item.bio}
                                    </p>
                                </div>
                            </div>
                            <Monitoring close={setOpen} open={open} />
                            <SettingsModal
                                open={settings}
                                close={setSettings}
                            />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Wallet
