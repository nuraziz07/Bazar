import Filter from '@/pages/Home/Filter.jsx'
import PageFilter from '@/pages/Home/pageFilter.jsx'
import { useState } from 'react'
import NewGoods from '@/pages/Home/NewGoods.jsx'
import CardSection from '@/pages/Home/CardSection.jsx'

const Home = () => {
    const [open, setOpen] = useState(false)
    const [home, setHome] = useState(true)

    return (
        <div className={'mobile  w-full px-20'}>
            <div className={'justify-center pt-7 flex'}>
                <Filter opening={setOpen} />
            </div>
            <div className={'pb-3 px-4'}>
                <div
                    className={
                        'bg-[#EEEEEE] w-full rounded-[5px] mt-4 flex gap-5 justify-center py-1 px-1'
                    }
                >
                    <button
                        className={`w-full ${home ? 'bg-white' : 'bg-none'} rounded-[5px] cursor-pointer py-2 `}
                        onClick={() => setHome(true)}
                    >
                        Тавсия этамиз
                    </button>
                    <button
                        onClick={() => setHome(false)}
                        className={`w-full rounded-[5px] cursor-pointer py-2 ${!home ? 'bg-white' : 'bg-none'}`}
                    >
                        Янгилари
                    </button>
                </div>
            </div>
            <div className={'h-[78vh] pt-6  pb-8 px-5 overflow-auto'}>
                {!home ? <NewGoods tab={home} /> : <CardSection />}
            </div>
            <PageFilter open={open} close={setOpen} />
        </div>
    )
}

export default Home
