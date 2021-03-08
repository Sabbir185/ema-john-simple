import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
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

    const removeItemHandler = productKey => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    };

    return (
        <div className='shop-container'>
            <div className='product-container'>
                <div>
                    {
                        cart.map(pd => <ReviewItem removeItemHandler={removeItemHandler} product={pd}></ReviewItem> )
                    }
                </div>
            </div>
            <div className='cart-container'>
                    <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;