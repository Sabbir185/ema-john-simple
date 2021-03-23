import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10);

    const [products, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    document.title = 'Shop';

    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const previewsCart = productKeys.map(existingKey =>{
            const product = fakeData.find(pd => pd.key === existingKey);
            product.quantity = saveCart[existingKey];
            return product;
        })
        setCart(previewsCart);
    },[])

    const handleAddProduct = (product) =>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count ;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }  
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>

                {
                    products.length === 0 && <p>Loading....</p>
                }
               
                {
                    products.map(pd => <Product key={pd.key} addCart={true} product={pd} handleAddProduct={handleAddProduct}></Product> )
                }
                
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to='/review'>
                        <button className='main-btn'>Order review</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;