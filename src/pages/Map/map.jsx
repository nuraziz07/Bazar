import React from 'react'
import { ChevronLeft, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Map = () => {
    const navigate = useNavigate()
    return (
        <div className={'flex justify-center'}>
            <h1
                className={
                    'absolute top-32 w-full text-center py-3 backdrop-blur-[4px] rounded-xl border border-gray-300 font-[700] text-[18px] text-gray-700 opacity-0.7'
                }
            >
                Проспект Хирмонтепа 1 дом 3
            </h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.16629979209!2d69.24711085331725!3d41.30524572263416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf3870c714d%3A0x6ddece20c220333b!2sMagic%20City%20Park!5e0!3m2!1sen!2s!4v1777640220568!5m2!1sen!2s"
                width="600"
                height="450"
                className={'w-full min-h-screen'}
            ></iframe>
            <button
                onClick={() => navigate('/adding')}
                className={
                    'bg-[#E1084D] text-white rounded-[10px] px-10 py-3 absolute bottom-7'
                }
            >
                Сақлаш
            </button>
        </div>
    )
}

export default Map
