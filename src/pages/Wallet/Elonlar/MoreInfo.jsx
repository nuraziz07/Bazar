import React from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

const MoreInfo = ({ open, close }) => {
    const modalStyle = {
        position: 'fixed',
        top: '77%',
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
        background: 'rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
    }
    if (!open) return null

    return (
        <div style={overlay} className={'mobile'}>
            <div
                style={modalStyle}
                className={'w-full mobile animation rounded-t-[30px] pt-5'}
            >
                <X onClick={() => close(false)} />
                <div className={'flex justify-center pt-5 items-center'}>
                    <ul
                        className={
                            'text-center text-[#272727] font-[400]  text-[16px]'
                        }
                    >
                        <li className={'leading-[54px]'}>Кўриш</li>
                        <li className={'leading-[54px]'}>Реклама килиш</li>
                        <li className={'leading-[54px]'}>Деактивация килиш</li>
                        <li className={'leading-[54px]'}>Хабарлари</li>
                        <li className={'leading-[54px]'}>Тахрирлаш</li>
                        <li className={'leading-[54px]'}>Улашиш</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MoreInfo
