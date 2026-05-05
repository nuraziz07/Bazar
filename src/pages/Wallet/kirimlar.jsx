import React from 'react';
import Payme from "@/assets/png/payme.png";
import Click from "@/assets/png/click.png";
import Paynet from "@/assets/png/paynet.jpg";

const Kirimlar = () => {
    return (
        <div>
            <div className={'flex items-center pt-2 justify-between'}>
                <div>
                    <h1 className={'font-[600] text-[19px] text-[#75758C]'}>900 000 сум</h1>
                    <h4 className={'font-[400] text-[12px] text-[#6D7278]'}>09.04.2020</h4>
                </div>
                <img src={Payme} className={'w-[130px] h-auto'} alt=""/>
            </div>
            <div className={'flex items-center justify-between'}>
                <div>
                    <h1 className={'font-[600] text-[19px] text-[#75758C]'}>900 000 сум</h1>
                    <h4 className={'font-[400] text-[12px] text-[#6D7278]'}>09.04.2020</h4>
                </div>
                <img src={Click} className={'w-[130px] h-auto'} alt=""/>
            </div>

            <div className={'flex items-center justify-between'}>
                <div>
                    <h1 className={'font-[600] text-[19px] text-[#75758C]'}>900 000 сум</h1>
                    <h4 className={'font-[400] text-[12px] text-[#6D7278]'}>09.04.2020</h4>
                </div>
                <img src={Paynet} className={'w-[130px] h-auto'} alt=""/>
            </div>

        </div>
    );
};

export default Kirimlar;