import React, { useContext } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { Link } from 'react-router-dom';
import { BasketContext, UserContext } from '../../App';
import { auth } from '../firebase/firebase';

const Header = () => {
    const [basket, setBasket] = useContext(BasketContext);
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const handleAuthChange = () =>{
        if(loggedUser){
            auth.signOut();  
        }
    }
    return (
        <div className='header'>
            <Link to="/">
            <img className="header_img" src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" alt="" />
            </Link>
            <div className="header_search">
                <input
                className="header_searchInput"
                 type="text" />
                 <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <Link to={!loggedUser && "/login"}>
                <div onClick={handleAuthChange} className="header_option">
                    <span className="header_optionLineOne">Hello {loggedUser?.email}</span>
                    <span className="header_optionLineTwo">{loggedUser ? 'Sign Out':'Sign In'}</span>
                </div>
                </Link>
                <Link to="/order">
                <div className="header_option">
                <span className="header_optionLineOne">Return</span>
                    <span className="header_optionLineTwo">Orders</span>
                </div>
                </Link>
                <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
                </div>
                </Link>
            </div>
            
        </div>
    );
};

export default Header;