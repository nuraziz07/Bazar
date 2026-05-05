import Card from '@/Components/Cards/card.jsx'
import './loading.css'
import useAxios from '@/Hooks/useAxios.js'

const CardSection = () => {
    const { data, loading, error } = useAxios('/products.json')

    if (error) {
        return <h1>404</h1>
    }

    return (
        <div className={'columns-2 gap-5'}>
            {loading ? <h1>Loading...</h1> : <Card data={data} />}
        </div>
    )
}

export default CardSection
