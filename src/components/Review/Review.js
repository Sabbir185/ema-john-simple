import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from './../../fakeData/index';

const Review = () => {
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        // from cart
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map( key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key] ;
            return product;
        })
        setCart(cartProducts);
    },[]);

    return (
        <div>
            <h1>Order item : {cart.length}</h1>
        </div>
    );
};

export default Review;