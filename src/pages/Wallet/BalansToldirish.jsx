import React from 'react';
import {ChevronLeft} from "lucide-react";
import Payme from '@/assets/png/payme.png'
import {Link} from "react-router-dom";

const BalansToldirish = () => {
    return (
        <div>
          <div className={'flex items-center gap-3 px-4 pt-6 pb-6'}>
              <Link to={'/wallet'}><ChevronLeft size={30} className={'text-[#E1084D]'} /></Link>
              <h1 className={'font-[600] text-[25px]'}>Баланс тулдириш</h1>
          </div>

            <select className={'w-full px-5 py-4'}>
                <option>Payme</option>
                <option>Click</option>
                <option>Paynet</option>
            </select>
        </div>
    );
};

export default BalansToldirish;