import { ChevronLeft } from 'lucide-react'
import ActiveElon from '@/Components/Ad/activeElon.jsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Berry from '@/Components/Ad/berry.jsx'

const ActiveElonlar = () => {
    const [all, setAll] = useState(true)

    return (
        <div>
            <div className={'flex items-center justify-start gap-3 pt-10 px-5'}>
                <Link to={'/wallet'}>
                    <ChevronLeft size={30} className={'text-[#E1084D]'} />
                </Link>
                <h1 className={'font-[600] text-[24px] tracking-[-0.22px]'}>
                    Актив эълонлар
                </h1>
            </div>

            <div
                className={
                    'shadow-[0px_-4px_6px] rounded-t-[30px] shadow-gray-300 mt-10 px-5'
                }
            >
                <div className={'flex items-center justify-center gap-6 pt-8'}>
                    <h1
                        onClick={() => setAll(true)}
                        className={`border-b-[2px] pb-3 transition-all duration-300 ease cursor-pointer ${all ? 'border-[#E1084D]' : 'border-gray-400'} w-full text-center`}
                    >
                        Барча компаниялар
                    </h1>
                    <h1
                        onClick={() => setAll(false)}
                        className={`border-b-[2px] pb-3 transition-all duration-300 ease cursor-pointer ${!all ? 'border-[#E1084D]' : 'border-gray-300'} w-full text-center`}
                    >
                        Berry Berry
                    </h1>
                </div>
            </div>

            <div className={'w-full h-[70vh] overflow-scroll pb-9 px-5 mt-2'}>
                {all ? <ActiveElon /> : <Berry />}
            </div>
        </div>
    )
}

export default ActiveElonlar
