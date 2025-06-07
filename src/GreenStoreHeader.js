import React from 'react'
import './GreenStoreHeader.css'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function Header() {
    const [{basket,user},dispatch] = useStateValue();
    
    // Removed the handleAuthentication function
    
  return (
    <div className='greenstoreheader'>
        <Link to='/'> 
            <img className='greenstoreheader_logo' src='/amazonclonewhite.png'/> 
        </Link>
     
        <div className='greenstoreheader_search'>
            <input className="greenstoreheader_searchInput" type='text' placeholder='Search for eco products'/>
            <SearchIcon className='greenstoreheader__searchicon'/>
        </div>
        
        <div className='greenstoreheader_nav'> 
            
            <div className='greenstoreheader_option'>
                <span className='greenstoreheader__optionlineone'>
                    {user ? `Hello, ${user.email}` : 'Hello Guest'}
                </span>
            </div>
            
            <div className='greenstoreheader_option'>
                <span className='greenstoreheader__optionlineone'>
                    EcoPulse 
                </span>
            </div>
            
            <div className='greenstoreheader_option'>
                <span className='greenstoreheader__optionlineone'>
                    My Orders
                </span>
            </div>
            
            <div className='greenstoreheader_option'>
                <span className='greenstoreheader__optionlineone'>
                    My Vouchers
                </span>
            </div>
            
            <Link to="/checkout"> 
                <div className='greenstoreheader_optionbasket'>
                    <ShoppingBasketIcon/>
                    <span className='greenstoreheader__optionlinetwo greenstoreheader_basketcount'>
                        My Basket {basket?.length}
                    </span>
                </div>
            </Link>
        </div>
        
    </div>
  );
}

export default Header