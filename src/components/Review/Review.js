import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import fakeData from './../../fakeData/index';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false);

    document.title = 'Review';

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

    const history = useHistory();
    const handleProceedCheckout = () => {
        history.push('/shipment');
    }

    // let picture;
    // if(orderPlace){
    //     picture = <img src={happyImage} alt=""/>
    // }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                <div>
                    {
                        cart.map(pd => <ReviewItem removeItemHandler={removeItemHandler} product={pd}></ReviewItem> )
                    }

                    {/* { picture } */}
                    
                </div>
            </div>
            <div className='cart-container'>
                    <Cart cart={cart}>
                        <button onClick={handleProceedCheckout} className='main-btn'>Proceed Checkout</button>
                    </Cart>
            </div>
        </div>
    );
};

export default Review;