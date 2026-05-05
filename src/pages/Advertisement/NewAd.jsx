import React from 'react'
import { ChevronRight, ImagePlus, MapPin, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Bery from '@/assets/png/bery.png'

const NewAd = () => {
    const navigate = useNavigate()
    return (
        <div className={'px-7'}>
            <div className={'flex items-center justify-between pt-10 pb-8'}>
                <h1 className={'font-[600] tracking-[-0.22px] text-[24px]'}>
                    Эълон қўшиш
                </h1>
                <i onClick={() => navigate('/home')}>
                    <X size={25} />
                </i>
            </div>

            <div className={'overflow-scroll h-[80vh]'}>
                <div
                    className={
                        'bg-[#EEEEF0] px-7 py-6 items-center flex justify-between rounded-[9px]'
                    }
                >
                    <div>
                        <h3
                            className={
                                'font-[600] text-[14px] tracking-[0.16px]'
                            }
                        >
                            Сиз танлаган рукун
                        </h3>
                        <h2
                            className={
                                'font-[400] text-[17px] tracking-[0.18px]'
                            }
                        >
                            Озиқ-овқат / Тухум/сут маҳсулотлари
                        </h2>
                    </div>
                    <ChevronRight size={25} />
                </div>

                <label
                    className={
                        'bg-[#EEEEF0] rounded-xl flex py-10 mt-5 justify-center items-center'
                    }
                >
                    <input
                        type="file"
                        placeholder={''}
                        className={'hidden'}
                        accept={'image/*'}
                    />
                    <div className={'flex gap-3 items-center justify-center'}>
                        <ImagePlus />
                        <h1 className={'font-[400] text-[14px]'}>Фото юклаш</h1>
                    </div>
                </label>

                <div
                    className={
                        'bg-[#EEEEEE] w-full rounded-[5px] mt-4 flex gap-5 justify-center py-1 px-1'
                    }
                >
                    <button
                        className={`w-full  rounded-[5px] cursor-pointer py-2 `}
                    >
                        Тавсия этамиз
                    </button>
                    <button
                        className={`w-full  rounded-[5px] cursor-pointer py-2 `}
                    >
                        Янгилари
                    </button>
                </div>

                <div className={'mt-6'}>
                    <h2 className={'font-[500] text-[16px] tracking-[-0.15px]'}>
                        Компаниянгизни бирини танланг
                    </h2>

                    <div
                        className={
                            'flex items-center bg-[#EEEEF0] px-7 py-4 mt-4 rounded-xl justify-between'
                        }
                    >
                        <div
                            className={'flex items-center justify-center gap-4'}
                        >
                            <img
                                src={Bery}
                                className={'w-[39px] h-[39px] rounded-[50%]'}
                                alt=""
                            />
                            <h2 className={'font-[600] text-[14px]'}>
                                OOO “Bery Bery”
                            </h2>
                        </div>
                        <ChevronRight />
                    </div>
                </div>

                <div className={'mt-6'}>
                    <h2 className={'font-[500] text-[15px]'}>
                        Эълон мавзусини киритинг
                    </h2>
                    <input
                        type="text"
                        className={
                            'bg-[#EEEEF0] w-full max-w-[500px] py-5 pl-5 rounded-xl mt-4'
                        }
                        placeholder={'Масалан цемант сотилади'}
                    />
                </div>

                <div className={'mt-6'}>
                    <h2 className={'font-[500] text-[15px]'}>
                        Тўлиқ матнини киритинг
                    </h2>
                    <textarea
                        type="text"
                        className={
                            'bg-[#EEEEF0] w-full max-w-[500px] pt-5 h-[20vh] pl-5 rounded-xl mt-4'
                        }
                        placeholder={'Масалан цемант сотилади'}
                    />
                </div>

                <div
                    onClick={() => navigate('/map')}
                    className={
                        'bg-[#EEEEF0] px-7 py-5 flex gap-3 rounded-xl mt-4 items-center justify-start'
                    }
                >
                    <MapPin size={25} />
                    <h3>Жойлашган манзил (локация танланг)</h3>
                </div>
            </div>
            <div className={'flex mt-5 pb-3 gap-4 justify-between'}>
                <button
                    onClick={() => navigate('/success')}
                    className={
                        'w-full py-3 bg-[#E1084D] text-[14px] font-[600] text-white rounded-[8px]'
                    }
                >
                    Сақлаш
                </button>
                <button
                    onClick={() => navigate('/home')}
                    className={
                        'w-full py-3 text-[#E1084D] text-[14px] font-[600] bg-white rounded-[8px] border border-[#E1084D]'
                    }
                >
                    Бекор қилиш
                </button>
            </div>
        </div>
    )
}

export default NewAd
