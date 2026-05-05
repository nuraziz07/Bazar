import Notification from '@/assets/png/notifi.png'
import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Notifications = () => {
    const navigate = useNavigate()

    return (
        <div className={'mobile w-full'}>
            <div
                className={
                    'w-[64%] items-center pt-7 pl-5 flex justify-between'
                }
            >
                <ChevronLeft size={30} onClick={() => navigate(-1)} />
                <h1 className={'font-[600] text-[22px] tracking-[-0.22px]'}>
                    Notifications
                </h1>
            </div>
            <div>
                <img src={Notification} className={'px-10 pt-20'} alt="" />
                <h1 className={'text-center font-[700] text-[23px] pt-3'}>
                    No Notifications yet
                </h1>
                <p className={'text-center px-10 pt-4'}>
                    Your notification will appear here once you've received them
                </p>
            </div>
        </div>
    )
}

export default Notifications
