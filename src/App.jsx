import './App.css'
import SplashScreen from '@/pages/SplashScreen/SplashScreen.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import LanguageSelect from '@/pages/SplashScreen/LanguageSelect.jsx'
import Home from '@/pages/Home/Home.jsx'
import Navbar from '@/Layout/navbar.jsx'
import NewGoods from '@/pages/Home/NewGoods.jsx'
import Message from '@/pages/Messages/message.jsx'
import Wallet from '@/pages/Wallet/wallet.jsx'
import NewAd from '@/pages/Advertisement/NewAd.jsx'
import Success from '@/pages/Advertisement/success.jsx'
import AskingNumber from '@/pages/User/AskingNumber.jsx'
import SendingCode from '@/pages/User/SendingCode.jsx'
import AskingName from '@/pages/User/AskingName.jsx'
import CardDetail from '@/pages/Home/CardDetail.jsx'
import Map from '@/pages/Map/map.jsx'
import BalansToldirish from '@/pages/Wallet/BalansToldirish.jsx'
import Profile from '@/pages/User/Profile.jsx'
import ActiveElonlar from '@/pages/Wallet/Elonlar/ActiveElonlar.jsx'
import NonActiveElonlar from '@/pages/Wallet/Elonlar/NonActiveElonlar.jsx'
import Notification from '@/pages/Notifications/notification.jsx'
import Basket from '@/pages/Basket/basket.jsx'

function App() {
    const location = useLocation()
    const startLocation = location.pathname.split('/')

    return (
        <div
            className={'mobile min-h-screen  border-l border-r border-gray-600'}
        >
            <Routes>
                <Route index element={<SplashScreen />} />
                <Route path={'/language'} element={<LanguageSelect />} />
                <Route path={'/home'} element={<Home />} />
                <Route path={'/newGoods'} element={<NewGoods />} />
                <Route path={'/messages'} element={<Message />} />
                <Route path={'/wallet'} element={<Wallet />} />
                <Route path={'/adding'} element={<NewAd />} />
                <Route path={'/success'} element={<Success />} />
                <Route path={'/myaccount'} element={<AskingNumber />} />
                <Route path={'/sendingcode'} element={<SendingCode />} />
                <Route path={'/editName'} element={<AskingName />} />
                <Route path={'/detail/:id'} element={<CardDetail />} />
                <Route path={'/map'} element={<Map />} />
                <Route path={'/toldirish'} element={<BalansToldirish />} />
                <Route path={'/profile'} element={<Profile />} />
                <Route path={'/ActiveElonlar'} element={<ActiveElonlar />} />
                <Route path={'/notification'} element={<Notification />} />
                <Route path={'/basket'} element={<Basket />} />
                <Route
                    path={'/NonActiveElonlar'}
                    element={<NonActiveElonlar />}
                />
            </Routes>
            {startLocation[1] === '' ||
            startLocation[1] === 'language' ||
            startLocation[1] === 'adding' ||
            startLocation[1] === 'success' ||
            startLocation[1] === 'map' ||
            startLocation[1] === 'toldirish' ? null : (
                <Navbar />
            )}
        </div>
    )
}

export default App
