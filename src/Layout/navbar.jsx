import Logo from '@/assets/png/logo.png'
import { Mail, NotepadText, Plus, User } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import useLocalStorage from '@/Hooks/useLocalStorage.js'

const Navbar = () => {
    const [selecting, setSelecting] = useState('home')
    const [phoneNumber, setPhoneNumber] = useLocalStorage('phoneNumber', '')

    const navigate = useNavigate()

    return (
        <div className={'fixed bottom-0 bg-white w-full mobile'}>
            <ul
                className={
                    'flex w-full   border-t-[13px] border-[#EEEEF0] justify-evenly gap-5 px-5 items-center'
                }
            >
                <Link to={'/home'}>
                    <li onClick={() => setSelecting('home')}>
                        <img
                            src={Logo}
                            className={`${selecting === 'home' ? 'border border-[#E1084D] transition-all duration-300 ease rounded-[50%]' : 'border-none'}`}
                            alt=""
                        />
                    </li>
                </Link>
                <Link to={'/wallet'}>
                    <li onClick={() => setSelecting('wallet')}>
                        <NotepadText
                            className={`${selecting === 'wallet' ? 'text-[#E1084D] transition-all duration-300 ease' : 'text-[#6D7278]'}`}
                        />
                    </li>
                </Link>
                <Link to={'/adding'}>
                    <li
                        className={` bg-[#E1084D] bottom-5 transition-all duration-300 ease text-white relative rounded-[50%]`}
                    >
                        <Plus size={50} className={'p-2 '} />
                    </li>
                </Link>
                <Link to={'/messages'}>
                    <li onClick={() => setSelecting('message')}>
                        <Mail
                            className={`${selecting === 'message' ? 'text-[#E1084D] transition-all duration-300 ease' : 'text-[#6D7278]'}`}
                        />
                    </li>
                </Link>
                <li onClick={() => setSelecting('account')}>
                    <User
                        onClick={() =>
                            navigate(
                                `/${phoneNumber.length === 0 ? 'myaccount' : 'profile'}`
                            )
                        }
                        className={`${selecting === 'account' ? 'text-[#E1084D] transition-all duration-300 ease' : 'text-[#6D7278]'}`}
                    />
                </li>
            </ul>
        </div>
    )
}

export default Navbar
