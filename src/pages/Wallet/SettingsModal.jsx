import React, { useState } from 'react'
import {
    BellRing,
    BookCheck,
    LayoutGrid,
    MessageCircleQuestionMark,
} from 'lucide-react'

const SettingsModal = ({ open, close }) => {
    const [toggle, setToggle] = useState(true)

    const modalStyle = {
        position: 'fixed',
        top: '85%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#FFF',
        padding: '20px',
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
        <div style={overlay} onClick={() => close(false)} className={'mobile'}>
            <div
                style={modalStyle}
                className={
                    'w-full mt-7  mobile animation  border border-gray-200  rounded-[20px]'
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

                <div className={'border-b   px-7 pt-5 pb-4 border-gray-200'}>
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
                    <div className={'flex gap-3'}>
                        <BookCheck className={'text-[#E1084D]'} />
                        <h3>Публичная оферта</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsModal
