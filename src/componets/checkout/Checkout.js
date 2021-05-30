import React, { useContext } from 'react';
import { BasketContext } from '../../App';
import './Checkout.css';
import CheckoutProducts from './../checkoutProducts/CheckoutProducts';
import SubTotal from '../subTotal/SubTotal';

const Checkout = () => {
    const [basket, setBasket] = useContext(BasketContext);
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_image" src="https://www.unitasterdays.com/images/banner-uosw.gif" alt="" />
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {
                        basket?.map(bak => <CheckoutProducts key={bak.id} basketItem={bak}></CheckoutProducts>)
                    }
                </div>
            </div>
            <div className="checkout_right">
                <SubTotal/>
            </div>
        </div>
    );
};

export default Checkout;