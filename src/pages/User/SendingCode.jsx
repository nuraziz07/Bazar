import Wolf2 from '@/assets/svg/optom.svg'
import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

const SendingCode = () => {
    const [code1, setCode1] = useState('')
    const [code2, setCode2] = useState('')
    const [code3, setCode3] = useState('')
    const [code4, setCode4] = useState('')

    const next1 = useRef(null)
    const next2 = useRef(null)
    const next3 = useRef(null)
    const next4 = useRef(null)

    const nextFirst = (e) => {
        const value = e.target.value
        setCode1(value)
        if (value.length === 1) {
            next1.current.focus()
        }
    }

    const nextSecond = (e) => {
        const value = e.target.value
        setCode2(value)
        if (value.length === 1) {
            next2.current.focus()
        }
    }

    const nextThree = (e) => {
        const value = e.target.value
        setCode3(value)
        if (value.length === 1) {
            next3.current.focus()
        }
    }

    return (
        <div>
            <h1 className={'font-[600] text-[24px] pt-8 px-8'}>
                Тизимга киринг
            </h1>
            <div
                className={
                    'mt-10 px-8 shadow-[0_-10px_6px] shadow-gray-100 rounded-t-[40px] pt-10'
                }
            >
                <div className={'w-full flex justify-center'}>
                    <img src={Wolf2} className={'flex justify-center'} alt="" />
                </div>

                <div className={'w-full  pt-10  justify-center gap-5 flex'}>
                    <input
                        type="text"
                        onChange={nextFirst}
                        value={code1}
                        className={
                            'border w-[50px] h-[50px] font-[700] text-center text-[20px]  text-[#3A3F46] rounded-[10px] border-gray-200'
                        }
                    />
                    <input
                        type="text"
                        onChange={nextSecond}
                        value={code2}
                        ref={next1}
                        className={
                            'border w-[50px] h-[50px] font-[700] text-center text-[20px] text-[#3A3F46] rounded-[10px] border-gray-200'
                        }
                    />
                    <input
                        type="text"
                        onChange={nextThree}
                        value={code3}
                        ref={next2}
                        className={
                            'border w-[50px] h-[50px] font-[700]  text-center text-[20px] text-[#3A3F46] rounded-[10px] border-gray-200'
                        }
                    />
                    <input
                        type="text"
                        maxLength={1}
                        ref={next3}
                        className={
                            'border w-[50px] h-[50px] font-[700] text-center text-[20px] text-[#3A3F46] rounded-[10px] border-gray-200'
                        }
                    />
                </div>

                <p
                    className={
                        'mt-9 font-[400] text-[14px] leading-[22px] text-[#6D7278]'
                    }
                >
                    Сиз кўрсатган +998 99 808 68 88 ракамига смс тарзда келган
                    турт хонали кодни киритинг!{' '}
                </p>
                <button
                    className={
                        'text-[#E1084D] flex justify-center pt-4 w-full text-[15px] font-[500] underline'
                    }
                >
                    Кайта юбориш
                </button>
                <Link to={'/editName'}>
                    <button
                        className={
                            'w-full py-3 text-white mt-8 bg-[#E1084D] rounded-xl'
                        }
                    >
                        Кириш
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default SendingCode
