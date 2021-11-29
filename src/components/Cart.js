import { Button } from 'react-bootstrap'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import addToCart from '../reducers/addProduct'
import './cart.css'
import { removeProduct } from '../actions'


const Cart = () => {
    const cartItem = useSelector(state => state.addToCart)
    const dispatch = useDispatch();
    const cartItems = useSelector(state=>state.cartItems)
    console.log(cartItems)
    return (
        <div></div>
        // <div className="cart">
        // <img src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg" alt="AD" srcset="" />
           /* {cartItem.length===0?(
               <div>
                   <h1>Your Cart Is Empty</h1>
                   <p>You have no items in your cart. Press "Add To Cart" next to the product add products</p>
               </div>
           ):(
               <div>
                   <h1>Your Shopping Cart</h1>
                   {cartItem.map(prod=>
                      <div className="checkoutProduct">
                      <img src={prod.imgsrc} alt=""/>
                      <div className="info">
                          <p className="title">{prod.name}</p>
                          <p className="checkOutPrice">
                              <small>$</small>
                              <strong>{prod.price}</strong>
                          </p>
                          <Button variant="dark" onClick={()=>dispatch(removeProduct(prod.id))}> Remove From Cart</Button>
                      </div>
                      </div>
                   )}
                  
               </div>
           )} 
           <div className="subtotal">
               <h1>subtotal</h1>
           </div>
        </div> */



        /* // <div>
        //     {cartItem.map(prod => <h1>{prod.quantity}{prod.name}</h1>)}
        // </div> */
    )
}

export default Cart
