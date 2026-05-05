import React from 'react';
import Goal from '@/assets/png/goal.png'
import {Link} from "react-router-dom";

const Success = () => {
    return (
        <div className={'text-center pt-30'}>
            <img src={Goal} className={'w-full flex justify-center'} alt=""/>
            <p className={'font-[400] text-[15px] leading-[21px] text-[#6D7278] px-10  pt-5'}>Сизнинг эълонингиз муваффакиятли жойлаштирилди модератор текширувидан сўнг эълон сайт ва мобиль иловамизда кўринади</p>
            <Link to={'/home'}><button className={'bg-[#E1084D] font-[400] rounded-[8px] text-white mt-5 leading-[21px] text-[14px] px-16 py-3'}>OK</button></Link>
        </div>
    );
};

export default Success;