import React, { useContext, useState, useEffect } from 'react';
import {
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { Link, useHistory } from 'react-router-dom';
import { BasketContext, UserContext } from '../../App';
import './Payment.css';
import CheckoutProducts from './../checkoutProducts/CheckoutProducts';
import CurrencyFormat from 'react-currency-format';

const Payment = () => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [basket, setBasket] = useContext(BasketContext)
    const history = useHistory();
    const subTotal =  basket.reduce((amount, item)=> item.price + amount, 0);
    const total = Math.round(subTotal * 100)

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        window
          .fetch("https://sleepy-eyrie-54218.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({total})
          })
          .then(res => {
            return res.json();
          })
          .then(data => {
            setClientSecret(data.clientSecret);
          });
      }, [basket]);
      const cardStyle = {
        style: {
          base: {
            color: "#32325d",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#32325d"
            }
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        }
      };
      const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
      };
      const handleSubmit = async ev => {
        ev.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement)
          }
        }).then(({paymentIntent})=>{
           
            const orders = {email:loggedUser.email, amount:paymentIntent.amount, basket: basket, paymentId:paymentIntent.id}
            fetch("https://sleepy-eyrie-54218.herokuapp.com/addOrders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(orders)
          })
            setSucceeded(true)
            setError(null)
            setProcessing(false)
            history.replace('/order')
            setBasket([])
        })
      };
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout ({<Link to="/checkout">{basket?.length} items</Link>})
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{loggedUser?.email}</p>
                        <p>123 React Road</p>
                        <p>chandgaon, chittagoog</p>
                    </div>

                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(bak => <CheckoutProducts key={bak.id} basketItem={bak} />)}
                    </div>
                    
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                    <form id="payment-form" onSubmit={handleSubmit}>
                        <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
                        <CurrencyFormat
                                renderText={(value)=>(
                                    <>
                                    <h3>
                                        Order Total ({basket.length} items) : <strong>{value}</strong>
                                    </h3>

                                   
                                    </>
                                )}

                                decimalScale={2}
                                value={subTotal}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                        <button
                            disabled={processing || disabled || succeeded}
                            id="submit"
                            className='payment_Button'
                        >
                            <span id="button-text">
                            {processing ? (
                                <div className="spinner" id="spinner"></div>
                            ) : (
                                "Pay now"
                            )}
                            </span>
                        </button>
                        {/* Show any error that happens when processing the payment */}
                        {error && (
                            <div className="card-error" role="alert">
                            {error}
                            </div>
                        )}
                        
                        </form>
                   

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Payment;