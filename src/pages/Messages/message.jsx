import React from 'react'
import Profile from '@/assets/png/profile.png'

const Message = () => {
    const messages = [
        {
            profile: 'https://randomuser.me/api/portraits/women/44.jpg',
            who: 'Самира',
            letter: 'Корейский қулупнай кўчатларига заказ қабул қиламиз. Нарх ва миқдор ҳақида сўраш учун ёзинг!',
            time: '01.03.2024',
        },
        {
            profile: 'https://randomuser.me/api/portraits/men/32.jpg',
            who: 'Жасур',
            letter: 'Салом, MacBook Air M2 сотилади, ҳолати аъло, ҳужжатлари бор. Қизиқсангиз хабар беринг.',
            time: '15.04.2024',
        },
        {
            profile: 'https://randomuser.me/api/portraits/women/68.jpg',
            who: 'Нилуфар',
            letter: 'Handmade елкачалтарлар тайёр, турли ранг ва ўлчамларда. Фотоларни юборишим мумкин.',
            time: '22.05.2024',
        },
        {
            profile: 'https://randomuser.me/api/portraits/men/76.jpg',
            who: 'Отабек',
            letter: 'Toyota Camry 2020 сотилади, пробег 45 000 км, ДТПсиз, бир эгалик. Кўришга таклиф қиламан.',
            time: '07.06.2024',
        },
        {
            profile: 'https://randomuser.me/api/portraits/women/12.jpg',
            who: 'Зулайҳо',
            letter: 'Уй учун гулчанглар ва сунъий гуллар сотилади, янги коллекция келди. Нархлар жуда қулай!',
            time: '19.07.2024',
        },
        {
            profile: 'https://randomuser.me/api/portraits/men/54.jpg',
            who: 'Шерзод',
            letter: 'iPhone 15 Pro Max 256GB янги, расми ва кафолати бор. Нарх кўришиб оламиз, занг уринг.',
            time: '03.08.2024',
        },
        {
            profile: 'https://randomuser.me/api/portraits/women/25.jpg',
            who: 'Малика',
            letter: 'Болалар учун ўйинчоқлар ва китоблар сотилади, барчаси яхши ҳолатда. Арзон нархда!',
            time: '28.08.2024',
        },
        {
            profile: 'https://randomuser.me/api/portraits/men/18.jpg',
            who: 'Бобур',
            letter: 'PlayStation 5 Digital Edition сотилади, 3 та ўйин бilan. Баҳолашиб олишимиз мумкин.',
            time: '11.09.2024',
        },
    ]

    return (
        <div className={'pt-7'}>
            <h1 className={'font-[600] text-[27px] pl-6 pb-6'}>Хабарлар</h1>
            <div
                className={
                    'h-[83vh] rounded-t-[40px] shadow-[0_-10px_6px] shadow-gray-100 overflow-auto'
                }
            >
                {messages.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                'flex border-b border-[#C8C8C8] items-center px-6 py-4 gap-3'
                            }
                        >
                            <img
                                src={item.profile}
                                className={'rounded-[50%] w-[52px] h-[52px]'}
                                alt=""
                            />
                            <div>
                                <h3
                                    className={
                                        'font-[700] text-[13px] text-[#3F5064]'
                                    }
                                >
                                    {item.who}
                                </h3>
                                <p className={'font-[400] text-[12px]'}>
                                    {item.letter}
                                </p>
                            </div>
                            <h4
                                className={
                                    'pt-9 text-[#6D7278] font-[300] text-[11px]'
                                }
                            >
                                {item.time}
                            </h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Message
