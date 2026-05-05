import React, { useState } from 'react'
import { X } from 'lucide-react'
import Kirimlar from '@/pages/Wallet/kirimlar.jsx'
import Chiqimlar from '@/pages/Wallet/chiqimlar.jsx'

const Monitoring = ({ open, close }) => {
    const [kirimlar, setKirimlar] = useState(true)

    const modalStyle = {
        position: 'fixed',
        top: '66%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#FFF',
        padding: '30px',
        zIndex: 1000,
    }
    const overlay = {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1000,
    }

    if (!open) return null

    return (
        <div style={overlay} className={'mobile'}>
            <div
                style={modalStyle}
                className={
                    'w-full animation h-[90vh] overflow-scroll mobile rounded-t-[40px] shadow-[0px_0px_6px] shadow-gray-300'
                }
            >
                <X onClick={() => close(false)} className={'flex'} />
                <div className={'flex justify-evenly gap-3 pt-5'}>
                    <h1
                        onClick={() => setKirimlar(true)}
                        className={`border-b-[2px] ${kirimlar ? 'border-[#E1084D]' : 'border-gray-200'}  pb-2 w-full text-center`}
                    >
                        Киримлар
                    </h1>
                    <h1
                        onClick={() => setKirimlar(false)}
                        className={`${!kirimlar ? 'border-[#E1084D]' : 'border-gray-300'} pb-2 border-b-[2px] w-full text-center`}
                    >
                        Чикимлар
                    </h1>
                </div>
                <div className={'pt-6 h-[60vh] overflow-scroll'}>
                    {kirimlar ? <Kirimlar /> : <Chiqimlar />}
                </div>
            </div>
        </div>
    )
}

export default Monitoring
