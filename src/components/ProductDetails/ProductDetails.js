import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState({});
    useEffect(()=>{
        fetch(`https://mighty-peak-71961.herokuapp.com/product/${productKey}`)
        .then(res=> res.json())
        .then(data=> setProduct(data));
    },[productKey])
   
    return (
        <div>
            <h1>{productKey} Product details</h1>
            <Product addCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;