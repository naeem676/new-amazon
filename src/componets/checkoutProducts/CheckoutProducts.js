import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import './CheckoutProducts.css';
import { useContext } from 'react';
import { BasketContext } from '../../App';

const CheckoutProducts = ({basketItem, hiddenbutton}) => {
    const [basket, setBasket] = useContext(BasketContext)
    const {id, title, image, price, rating} = basketItem;
    const removeFromBasket = (basketItemId) => {
        const index = basket.findIndex(basketProduct => basketProduct.id === basketItemId)
        let newBasket = [...basket]
            if(index >= 0){
                newBasket.splice(index, 1);
            
            }else{
                console.warn(`Cant remove product(id:${basketItemId}) as its not in basket!`)
            }
            setBasket(newBasket)
    }
    return (
        <div className="checkOut_products">
            <img className="checkOut_products_img" src={image} alt="" srcset="" />
            <div className="checkOut_products_info">
                <p className="checkOut_products_title">{title}</p>
                <p className="checkOut_products_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkOut_products_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i)=>(<p><StarRateIcon style={{color:"gold"}} /></p>))
                    }
                </div>
                {!hiddenbutton && <button onClick={()=>removeFromBasket(id)}>Remove from Basket</button>}
            </div>
        </div>
    );
};

export default CheckoutProducts;