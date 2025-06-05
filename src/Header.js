import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
function Header() {
    const [{basket,user},dispatch] = useStateValue();
    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }
  return (
    <div className='header'>
        <Link to='/'> <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/> </Link>
     
    <div className='header_search'>
        <input className="header_searchInput" type='text'/>
        <SearchIcon className='header__searchicon'/>
    </div>
    <div className='header_nav'> 
        <Link to= {!user && '/login'}>
        <div onClick={handleAuthentication} className='header_option'>
            <span className='header__optionlineone'>
                {user? `Hello, ${user?.email}` : 'Hello Guest'}
            </span>
            <span className='header__optionlinetwo'>
            {user ? 'Sign Out' : 'Sign In'}
            </span>
        </div>
        </Link>
        <div className='header_option'>
<span className='header__optionlineone'>
            return 
            </span>
            <span className='header__optionlinetwo'>
                & orders
            </span>
        </div>
        <div className='header_option'>
<span className='header__optionlineone'>
                your
            </span>
            <span className='header__optionlinetwo'>
                Prime
            </span>
        </div>
        <Link to="checkout"> 
        <div className='header_optionbasket'>
        <ShoppingBasketIcon/>
        <span className='header__optionlinetwo header_basketcount'>
                {basket?.length}
            </span>
    </div>
        </Link>
    
    </div>
    </div>
  );
}

export default Header
