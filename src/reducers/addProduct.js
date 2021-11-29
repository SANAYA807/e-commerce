const initialState = {
    cartItems:[]
};

const addToCart = (state = initialState, action) => {
   if(action.type==="addProduct"){
       console.log("product added")
   }
}
export default addToCart;