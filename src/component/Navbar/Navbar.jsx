import React, { useState } from "react";
import { Link } from "react-router-dom"
import { IoMdCart } from "react-icons/io";
import './Navbar.css'
import { GiFoodChain } from "react-icons/gi";
import CartSideBar from '../CartSidebar/CardSidebar'
 

const Navbar = ({cart , setCart}) => {

    let [show, setShow] = useState(false)
    return(
        
        <div className="mainContainer">
            <nav>
                <div className="logo">
                    <div className="foodlogo"><GiFoodChain /></div>
                    <div className="logoName">The Hungry Palette</div>
                </div>
                <ul className="listItems">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={""} onClick={()=>setShow(true)}><IoMdCart />
                    <span>{cart.length}</span></Link></li>
                </ul>
            </nav>
            {
                show && <CartSideBar show={show}
                setShow={setShow} cart={cart} setCart={setCart}/>
            }

        </div>
        
    )
}

export default Navbar