import React, { useContext } from 'react';
import { BasketContext } from '../../App';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
import './SubTotal.css';

const SubTotal = () => {
    const history = useHistory();
    const [basket, setBasket] = useContext(BasketContext)


        
    const subTotal =  basket.reduce((amount, item)=> item.price + amount, 0)
    
    return (
        <div className="subTotal">
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p>
                Subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>

            <small className="subTotal_gift">
                <input type="checkbox" />
                this order contains a gift
            </small>
            </>
        )}

        decimalScale={2}
        value={subTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
        <button onClick={()=> history.push('/payment')}>Proceed to Checkout</button>
    </div>
    );
};

export default SubTotal;