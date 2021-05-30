import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';
import './Products.css';
import { useContext } from 'react';
import { BasketContext } from '../../App';

const Products = ({id, title, image, price, rating}) => {
    const [basket, setBasket] = useContext(BasketContext);
    const  products = {id, title, image, price, rating} ;
    const addToBasket = (product) => {
     const newBasket = [...basket, product]
     setBasket(newBasket)
    }
    return (
        <div className="products">
            <div className="products_info">
                <p>{title}</p>
                <p className="products_price">
                    <small>$</small>
                    <small>{price}</small>
                </p>
                <div className="products_rating">
                    {Array(rating).fill().map((_, i)=>(<p><StarRateIcon style={{color:'gold'}} /></p>))}
                    
                 
                </div>
            </div>

            <img src={image} alt="" />
              <button onClick={()=>addToBasket(products)} >Add to Basket</button>
        </div>
    );
};

export default Products;