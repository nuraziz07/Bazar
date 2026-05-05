import React, {useState} from 'react';
import {X} from "lucide-react";
import '@/App.css'

const PageFilter = ({open, close}) => {



    const [active, setActive] = useState(0)

    const modalStyle = {
        position: 'fixed',
        top: '76%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#FFF',
        padding: '30px',
        zIndex: 1000,
    };
    const overlay = {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
    };


    if(!open) return null;

    const data = [
        {
            bio: 'Озиқ-овқат'
        },
        {
            bio: 'Кийим-кечак'
        },
        {
            bio: 'Қурилиш моллари'
        },
        {
            bio: 'Электрон қурилмалар'
        },
        {
            bio: 'Маиший техникалар'
        },
        {
            bio: 'Мебеллар'
        },
        {
            bio: 'Хўжалик моллари'
        },
        {
            bio: 'Дехкончилик махсулотлари'
        },
        {
            bio: 'Концелярия моллари'
        },
        {
            bio: 'Транспорт'
        },
    ]
    return (


        <div style={overlay} className={'mobile'}>
            <div style={modalStyle}   className={'w-full animation rounded-t-[40px] mobile border-l border-r border-gray-600 h-[90vh]'}>
                <div className={'flex justify-end pr-3'}>
                    <X onClick={() => close(false)} />
                </div>
                <ul className={'pt-4'}>
                    {data.map(((item, index) => {
                        return (
                            <li onClick={() => setActive(index)}   className={` ${active === index ? 'bg-[#E1084D] text-white': 'bg-white text-black'} pl-3 pt-4 font-[400] text-[15px] rounded-[4px]  pb-4`}>{item.bio} </li>
                        )
                    }))}
                </ul>
            </div>
        </div>
    );
};

export default PageFilter;



// <li>Кийим-кечак</li>
// <li>Қурилиш моллари</li>
// <li>Электрон қурилмалар</li>
// <li> Маиший техникалар</li>
// <li>Мебеллар</li>
// <li>Хўжалик моллари</li>
// <li>Дехкончилик махсулотлари</li>
// <li>Концелярия моллари</li>
// <li>Транспорт</li>