import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
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

    const removeItemHandler = productkey => {
        const newCart = cart.filter(pd => pd.key!= productkey);
        setCart(newCart);
        removeFromDatabaseCart(productkey);
    };

    return (
        <div>
            <h1>Order item : {cart.length}</h1>
            {
                cart.map(pd => <ReviewItem removeItemHandler={removeItemHandler} product={pd}></ReviewItem> )
            }
        </div>
    );
};

export default Review;