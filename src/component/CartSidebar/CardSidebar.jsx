import React, { useState } from "react";
import './CardSidebar.css'
import QRcode from 'react-qr-code'


const CardSidebar = ({ show, setShow, cart, setCart }) => {

    let [showQr  , setShowQr] = useState(false)

    let removeItem = (index) => {
        let updateCart = [...cart];

        if (updateCart[index].qty > 1) {
            updateCart[index].qty -=1
        } else {
            updateCart.splice(index , 1)
        }
        setCart(updateCart)
    }

    let total = cart.reduce((acc, item)=>acc + item.price * item.qty , 0)
    return (
        <div className="sidebar">
            <button className="closeBtn" onClick={() => setShow(false)}>X</button>
            <h2>Your Cart</h2>
            {
                cart.map((item, index) => {
                    return <div className="cartItem">
                        <img src={item.image} alt="" />
                        <div className="cartDetails">
                            <p>{item.name}</p>
                            <p>&#8377;{item.price}</p>
                        </div>
                        <div className="qtyControls">
                    <button onClick={()=>removeItem(index)}>-</button>
                    <span>{item.qty}</span>
                    <button 
                    onClick={()=>{
                        let updateCart = [...cart];
                        updateCart[index].qty +=1
                        setCart(updateCart)
                    }}>+</button>
                </div>
                <button className="removeBtn" 
                onClick={()=> removeItem(index)}>Remove</button>
            </div>
                    
                })
            }
            
            <h3 className="total">Total : &#8377; {total}</h3>
            <button className="orderBtn" 
            onClick={()=>setShowQr(true)}>Place Order
            </button>

            {showQr && <div style={{height:"370px",width:"370px",
            margin:"20px auto",display:"flex",flexDirection:"column",
            alignItems:"center",justifyContent:"space-around"}}>
                <h2>Scan and Pay</h2>
                <QRcode value='parth2005.bhosale@oksbi' size={200}/>
                <h3>Total : &#8377;{total}</h3>
                </div>}
        </div>
    )
}

export default CardSidebar