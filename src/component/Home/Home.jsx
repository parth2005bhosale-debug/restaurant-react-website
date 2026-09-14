import React from "react";
import Chickenbiryani from '../../asset/Chickenbiryani.jpg'
import Chicken_handi from '../../asset/Chicken handi.jpg'
import Chickentandoori from '../../asset/Chicken tandoori.jpg'
import ChickenTikka from '../../asset/Chicken tikka.jpg'
import ChickenTripleRice from '../../asset/Chicken triple rice.jpg'
import Chicken65 from '../../asset/Chicken65.jpg'
import Chocolate_IceCream from '../../asset/Chocolate ice-cream.jpg'
import Crab_Curry_Masala from '../../asset/Crab-Curry masala.jpg'
import Dal_Makhni from '../../asset/Dal makhni.jpg'
import Egg_Biryani from '../../asset/Egg biryani.jpg'
import Fish_Curry from '../../asset/Fish cury.jpg'
import Fish_Koliwada from '../../asset/Fish Koliwada.jpg'
import Garlic_Naan from '../../asset/Garlic naan.jpg'
import Gulabjamun from '../../asset/Gulabjamun.jpg'
import Hyderabadi_Chicken from '../../asset/Hyderabadi-chicken.jpg'
import Kulfi from '../../asset/Kulfi.jpg'
import Mushroom_Masala from '../../asset/Mushroom Masala.jpg'
import Mutton_Handi from '../../asset/Mutton handi.jpg'
import Mutton_Korma from '../../asset/Mutton Korma.jpg'
import Palak_Paneer from '../../asset/Palak Paneer.jpg'
import Paneer_Biryani from '../../asset/Paneer biryani.jpg'
import Paneer_Masala from '../../asset/Paneer Masala.jpg'
import Fish_Fry from '../../asset/Fish_Fry.jpg'
import Pulao from '../../asset/Pulao.jpg'
import Rajma_Masala from '../../asset/Rajma-masala.jpg'
import Rasmalai from '../../asset/Rasmalai.jpg'
import Rice_Roti from '../../asset/Rice Roti.jpg'
import Shrikhand from '../../asset/Shrikhand.jpg'
import Surmai from '../../asset/Surmai fry.jpg'
import Tandoori_Roti from '../../asset/Tandoor roti.jpg'
import Veg_Cutlet from '../../asset/Veg_Cutlet.jpg'
import Prawns from '../../asset/Prawns.jpg'
import Prawns_Masala from '../../asset/Prawns_Masala.jpg'
import Prawns_Koliwada from '../../asset/Prawns_Koliwada.jpg'
import Prawns_Ghe_Roast from '../../asset/Prawns_Ghe_Roast.jpg'
import Pizza from '../../asset/Pizza.jpg'
import Pav_Bhaji from '../../asset/PavBhaji.jpg'
import Baigan_Bharta from '../../asset/Baigan_Bharta.jpg'
import Burger from '../../asset/Burger.jpg'
import Cheese_Toast from '../../asset/Cheese_Toast.jpg'
import Crispy_Corn from '../../asset/Crispy_Corn.jpg'
import Dragon_Chicken from '../../asset/Dragon_Chicken.jpg'
import French_Fries from '../../asset/French_Fries.jpg'
import Garlic_Rice from '../../asset/Garlic_Rice.jpg'
import Masala_Papad from '../../asset/Masala_Papad.jpg'
import Mexicon_Rice from '../../asset/Mexicon_Rice.jpg'
import Onion_Rings from '../../asset/Onion_Rings.jpg'
import Pasta from '../../asset/Pasta.jpg'
import Card from '../Card/Card'
import './Home.css'
import { FaSearch } from "react-icons/fa";
import { useState } from "react";



const Home = ({cart , setCart}) => {

   let [search,setSearch] = useState("")

    let cardData =[ {
        id : 1,
        name : "ChickenBiryani",
        image :Chickenbiryani ,
        price : 180
    },
     {
        id : 2,
        name : "ChickenHandi",
        image :Chicken_handi ,
        price : 380

     },
     {
        id : 3,
        name : "ChickenTandoori",
        image :Chickentandoori ,
        price : 280
     },
     {
        id : 4,
        name : "ChickenTikka",
        image :ChickenTikka ,
        price : 260
     },
     {
        id : 5,
        name : "Chicken Triple Rice",
        image :ChickenTripleRice,
        price : 200
     },
     {
        id : 6,
        name : "Chicken 65",
        image :Chicken65,
        price : 240
     },
     {
        id : 7,
        name : "Chocolate Ice-Cream",
        image :Chocolate_IceCream,
        price : 120
     },
     {
        id : 8,
        name : "Crab_Curry_Masala",
        image :Crab_Curry_Masala,
        price : 350
     },
     {
        id : 9,
        name : "Dal Makhni",
        image :Dal_Makhni,
        price : 160
     },
     {
        id : 10,
        name : "Egg Biryani",
        image :Egg_Biryani,
        price : 190
     },
     {
        id : 11,
        name : "Fish Curry",
        image :Fish_Curry,
        price : 420
     },
     {
        id : 12,
        name : "Fish Koliwada",
        image :Fish_Koliwada,
        price : 230
     },
     {
        id : 13,
        name : "Garlic Naan",
        image :Garlic_Naan,
        price : 55
     },
     {
        id : 14,
        name : "Gulabjamun",
        image :Gulabjamun,
        price : 85
     },
     {
        id : 15,
        name : "Hyderabadi Chicken",
        image :Hyderabadi_Chicken,
        price : 350
     },
     {
        id : 16,
        name : "Kulfi",
        image :Kulfi,
        price : 30
     },
     {
        id : 17,
        name : "Mushroom Masala",
        image : Mushroom_Masala,
        price : 240
     },
     {
        id : 18,
        name : "Mutton Handi",
        image : Mutton_Handi,
        price : 450
     },
     {
        id : 19,
        name : "Mutton Korma",
        image : Mutton_Korma,
        price : 380
     },
     {
        id : 20,
        name : "Palak Paneer",
        image : Palak_Paneer,
        price : 250
     },
     {
        id : 21,
        name : "Paneer Biryani",
        image : Paneer_Biryani,
        price : 220
     },
     {
        id : 22,
        name : "Paneer Masala",
        image : Paneer_Masala,
        price : 320
     },
     {
        id : 23,
        name : "Fish Fry",
        image : Fish_Fry,
        price : 400
     },
     {
        id : 24,
        name : "Pulao",
        image : Pulao,
        price : 180
     },
     {
        id : 25,
        name : "Rajma Masala",
        image : Rajma_Masala,
        price : 300
     },
     {
        id : 26,
        name : "Rasmalai",
        image : Rasmalai,
        price : 120
     },
     {
        id : 27,
        name : "Rice Roti",
        image : Rice_Roti,
        price : 30
     },
     {
        id : 28,
        name : "Shrikhand",
        image : Shrikhand,
        price : 80
     },
     {
        id : 29,
        name : "Surmai",
        image : Surmai,
        price : 390
     },
     {
        id : 30,
        name : "Tandoori Roti",
        image : Tandoori_Roti,
        price : 25
     },
     {
        id : 31,
        name : "Veg Cutlet",
        image : Veg_Cutlet,
        price : 60
     },
     {
        id : 32,
        name : "Prawns",
        image : Prawns,
        price : 160
     },
     {
        id : 33,
        name : "Prawns_Masala",
        image : Prawns_Masala,
        price : 370
     },
     {
        id : 34,
        name : "Prawns_Koliwada",  
        image : Prawns_Koliwada,
        price : 270
     },
     {
        id : 35,
        name : "Prawns Ghe Roast",  
        image : Prawns_Ghe_Roast,
        price : 400
     },
     {
        id : 36,
        name : "Pizza",  
        image : Pizza,
        price : 150
     },
      
     {
        id : 38,
        name : "Pasta",  
        image : Pasta,
        price : 100
     },
     {
        id : 39,
        name : "Onion Rings",  
        image : Onion_Rings,
        price : 70
     },
     {
        id : 40,
        name : "Mexicon Rice",  
        image : Mexicon_Rice,
        price : 280
     },
     {
        id : 42,
        name : "Masala Papad",  
        image : Masala_Papad,
        price : 60
     },
     {
        id : 43,
        name : "Pav Bhaji",  
        image : Pav_Bhaji,
        price : 100
     },
     {
        id : 44,
        name : "Garlic Rice",  
        image : Garlic_Rice,
        price : 120
     },
     {
        id : 45,
        name : "French Fries",  
        image : French_Fries,
        price : 139
     },
     {
        id : 46,
        name : "Dragon Chicken",  
        image : Dragon_Chicken,
        price : 220
     },
     {
        id : 47,
        name : "Crispy Corn",  
        image : Crispy_Corn,
        price : 80
     },
     {
        id : 48,
        name : "Cheese Toast",  
        image : Cheese_Toast,
        price : 130
     },
     {
        id : 49,
        name : "Burger",  
        image : Burger,
        price : 200
     },
     {
        id : 50,
        name : "Baigan Bharta",  
        image : Baigan_Bharta,
        price : 320
     }
     
    ]

    let filterData = cardData.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
    
    return (
        <div>
         <div className="search">
            <div className="searchBar">
               <FaSearch />
               <input type="text" 
                 placeholder="Search Food Item"
                 value={search}
                 onChange={(e) => {setSearch(e.target.value)}}
               />
            </div>
         </div>
         <Card cardData={filterData} cart={cart} setCart={setCart} />
        </div>
    )
}

export default Home