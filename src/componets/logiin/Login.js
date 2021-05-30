import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory();
    
    const location = useLocation();
    
    const { from } = location.state || { from: { pathname: "/" } };
    
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.replace(from)
            
            
        })
        .catch(error=> alert(error.message))
    }
    const register = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth)=> {
            if(auth){
                history.replace(from)
            }
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
            <img className="login_logo" src="http://www.theinternetretailer.co.uk/wp-content/uploads/2019/06/1280px-Amazon_logo.svg_.png" alt="" />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=> setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=> setPassword(e.target.value)} />
                    <button type="submit" onClick={signIn} className="login_signButton">Sign In</button>
                </form>
                <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please 
                    See our Privacy Notice, our Cookies Notice and our interest-Based ads Notice.
                </p>
                <button onClick={register} className="login_registerButton">Create your amazon account</button>
            </div>
        </div>
    );
};

export default Login;