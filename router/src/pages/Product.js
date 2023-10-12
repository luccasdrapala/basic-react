import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Product = () => {

    const {id} = useParams();

    const url = `http://localhost:3000/products/${id}`;
    
  
    const { data: product, loading, error } = useFetch(url);
    return (<>
        <div>Produtos</div>
        
        {error && <p>{error}</p>}
        {loading && <p>Carregando...</p>}
        {product &&
            <div>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <Link to={`/products/${product.id}/info`}>Mais informacoes</Link>
            </div>
        }
    </>)
}

export default Product