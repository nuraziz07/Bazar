import Wolf from '@/assets/png/wolf.png'
import {ChevronRight} from "lucide-react";
import {useNavigate} from "react-router-dom";

const SplashScreen = () => {
    const navigate = useNavigate()
    return (
        <div className={'mobile min-h-screen w-full items-center flex justify-center bg-[#E1083C]'}>
           <div>
               <img src={Wolf} className={'w-[375px] h-[346px]'} alt=""/>
               <div className={'w-full justify-center flex pt-16'}>
                   <ChevronRight onClick={() => navigate('/language')} className={'p-2 rounded-[50%] bg-white'} size={40} />
               </div>
           </div>
        </div>
    );
};

export default SplashScreen;