import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Product = () => {

    const {id} = useParams();

    const url = `http://localhost:3000/products/${id}`;
    
  
    const { data: product, loading, error } = useFetch(url);
    console.log(product);
    return (<>
        <div>Produtos</div>
        
        {error && <p>{error}</p>}
        {loading && <p>Carregando...</p>}
        {product &&
            <div>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
            </div>
        }
    </>)
}

export default Product