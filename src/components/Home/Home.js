import { useNavigate } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import './Home.css';

const Home = () => {
    const products = useProduct();
    const navigate = useNavigate();
    return (
        <div>
            <div className='grid grid-cols-2 gap-4'>
                <div className="my-4">
                    <div className="my-4 mx-6">
                        <h2 className='my-3 text-3xl font-bold'>{products[0]?.title}</h2>
                        <h3 className='my-3 text-2xl text-blue-500 font-bold'>{products[0]?.slog}</h3>
                        <p className='mx-7 text-justify'>{products[0]?.desc}</p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Details</button>
                </div>
                <div className="my-4">
                    <img src={products[0]?.imageUrl} alt="" />
                </div>
            </div>
            <div className='my-5'>
                <h1 className='my-2 text-2xl font-bold'>Customer Review(3)</h1>

                <button onClick={() => navigate("/reviews")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold pb-1 px-4 rounded">See all Reviews</button>
            </div>
        </div>
    );
};

export default Home;