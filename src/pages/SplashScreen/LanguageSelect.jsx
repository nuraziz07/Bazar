import Wolf from "@/assets/png/wolf.png";
import {useNavigate} from "react-router-dom";

const LanguageSelect = () => {
    const  navigate = useNavigate()
    return (
        <div className={'mobile min-h-screen w-full items-center flex justify-center bg-[#E1083C]'}>
            <div>
                <img src={Wolf} className={'w-[375px] h-[346px]'} alt=""/>
                <div className={'grid gap-5 pt-10 px-17'}>
                    <button onClick={() => navigate('/home')} className={'bg-white rounded-[11px] px-7 py-4'}>Русский</button>
                    <button onClick={() => navigate('/home')} className={'bg-white rounded-[11px] px-7 py-4'}>O'zbekcha</button>
                    <button onClick={() => navigate('/home')} className={'bg-white rounded-[11px] px-7 py-4'}>Ўзбекча</button>
                </div>
            </div>
        </div>
    );
};

export default LanguageSelect;