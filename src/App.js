
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './componets/header/Header';
import Home from './componets/home/Home';
import Checkout from './componets/checkout/Checkout';
import Login from './componets/logiin/Login';
import { auth } from './componets/firebase/firebase';
import Payment from './componets/payment/Payment';
import PrivateRoute from './componets/privateRoute/PrivateRoute';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './componets/orders/Orders';

const promise = loadStripe("pk_test_51IeuuaFz4lVH0Yok4Awy7G59ZWevm8XQfiTnsBowOO2awPbjSCfHKAE5ffu9mwDVK7del34ryFAn75mBH4KYkBBq00ZsdUabGx");

export const BasketContext = createContext();
export const UserContext = createContext();


function App() {
  const [basket, setBasket] = useState([]);
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        setLoggedUser(authUser)
        
      } else {
        setLoggedUser(null)
      }
    })
  }, [])
  return (
    <BasketContext.Provider value={[basket, setBasket]}>
      <UserContext.Provider value={[loggedUser, setLoggedUser]}>
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/'>
              <Header/>
              <Home/>
          </Route>
          <Route  path='/checkout'>
              <Header/>
              <Checkout/>
          </Route>
          <Route  path='/login'>
              <Login/>
          </Route>
          <Route  path='/order'>
            <Header/>
              <Orders/>
          </Route>
          <PrivateRoute path='/payment'>
          <Header/>
          <Elements stripe={promise}>
          <Payment/>
        </Elements>
              
          </PrivateRoute>
        </Switch>
      </Router>
      
     
    </div>
    </UserContext.Provider>
    </BasketContext.Provider>
  );
}

export default App;
