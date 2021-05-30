import React from 'react';
import './Ordered.css';
import  CurrencyFormat  from 'react-currency-format';
import CheckoutProducts from '../checkoutProducts/CheckoutProducts';

const Ordered = ({order}) => {
    const amount = order.amount / 100;
    
    return (
        <div className="ordered">
            
            <p className="ordered_id">
                <small>{order.paymentId}</small>
               
                
            </p>
            {
                    order?.basket.map(item => <CheckoutProducts basketItem={item} hiddenbutton /> )
                }
            
            <CurrencyFormat
                                renderText={(value)=>(
                                   
                                    <h3 className="ordered_total">
                                        Order Total: <strong>{value}</strong>
                                    </h3>

                                   
                                    
                                )}

                                decimalScale={2}
                                value={amount}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
           
                            
        </div>
    );
};

export default Ordered;