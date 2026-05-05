import Card from '@/Components/Cards/card.jsx'
import notFound from '@/assets/png/404.png'
import './loading.scss'
import useAxios from '@/Hooks/useAxios.js'

const CardSection = () => {
    const { data, loading, error } = useAxios('/products.json')

    if (error) {
        return (
            <>
                <img src={notFound} alt="" />
            </>
        )
    }

    return (
        <div className={'columns-2 gap-5'}>
            {loading ? (
                <svg
                    className="spinner"
                    width="65px"
                    height="65px"
                    viewBox="0 0 66 66"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        className="path"
                        fill="none"
                        stroke-width="6"
                        stroke-linecap="round"
                        cx="33"
                        cy="33"
                        r="30"
                    ></circle>
                </svg>
            ) : (
                <Card data={data} />
            )}
        </div>
    )
}

export default CardSection
