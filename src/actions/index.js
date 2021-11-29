export const increment = {
    type: "increment"
}
export const decrement = {
    type: "decrement"
}
export const addProduct = (product) => {
    return {
        type: "addProduct",
        payload: product
    }
}
export const removeProduct=(prodId)=>{
    return{
        type:"removeProduct",
        payload:prodId
    }

}