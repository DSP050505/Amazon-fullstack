import React from 'react';
import "./GreenStoreCheckout.css";
import Greenproducts from './Greenproducts';
function Home() {
  return (
    <div className='Greenstorehome'>
      <div className='Greenstorehome_container'>
        <img className="Greenstorehome_image" src="/greenstorehome.jpg"  />
        <div className='Greenstorehome_row'>
            <Greenproducts id="123431 " title="Happy Cove Solid Husk Eco Friendly 10 inch Dinner Plates|Rice Husk and Bamboo Fibre|Set of 3 with 3 Bowls (200ml) and 3 Sauce Bowls - Durable, Microwave Safe, Multicolour" price = {448} 
            image = "/plates.png" 
            rating={70}/>
             <Greenproducts id="12349 " title="Beco Bamboo Soft Facial Tissue Papers- 100 Pulls (Pack of 6), 600 Pulls - 2 ply,100% Natural and Ecofriendly, Soft tissue box/pack" price = {211} 
            image = "/tissues.png" 
            rating={50}/>
            
            
        </div>
        <div className='Greenstorehome_row'>
            <Greenproducts id="12348 " title="bioQ Box of 50 Plantable Pencils With Seeds| Eco Friendly Stationary | Recycled Paper Bulk Packaging | Grow Plants From Pencils" price = {465} 
            image = "/pencils.png" 
            rating={0}/>
            <Greenproducts id="12347 " title="Organic B Bamboo Tribal Travel Kit|1 Bamboo Manual,Adult,Multicolor Toothbrush, Tongue Cleaner,Pocket Neem Comb,Bamboo" price = {312} 
            image = "/comb.png" 
            rating={20}/>
            <Greenproducts id="12346 " title="Cubic Eco-Friendly Pocket Planner – Recycled Paper | 14.8 x 21 cm Compact Daily Organizer for Notes, To-Do Lists, Study, Work & Personal Scheduling" price = {141} 
            image = "/book.png" 
            rating={80}/>
        </div>
        <div className='Greenstorehome_row'>
            <Greenproducts id="12345 " title="Growfitz Premium Mixed Dried Fruits | Export Quality | 15 in 1 Trail Mix | Cashew, Almonds, Anjeer, Craneberries, Pista, Dates, Cherries and Many More (400g x 1)" price = {400.89} 
            image = "/food.png" 
            rating={40}/>
            
        </div> 

      </div>
      
    </div>
  ); 
}

export default Home;
