import { createSlice } from "@reduxjs/toolkit";
import { saveInLocal, getFromLocal } from "../../utils/localStorage";

const defaultObj = {
  carts: [],
  totalAmount: 0,
  shippingAmount: 500,
};

const cartFromLocalStorage = getFromLocal("cartState");

const initialState = cartFromLocalStorage ? cartFromLocalStorage : defaultObj;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartQuantityControl: (state,action) => {
      console.log("action",action.payload);
      const index = state.carts.findIndex(c=> c.id == action.payload.id);
      if(index != -1 && index != null){
        const carts = state.carts[index];
        console.log("cart quantity-->",carts.quantity,"product quantity -->",carts.productQuantity)
        console.log("isTrue-->",carts.quantity <= carts.productQuantity);
        switch(action.payload.operation){
          case 'add': 
            if(carts.quantity < carts.productQuantity){
              
              carts.quantity += 1;
              state.totalAmount += carts.price * 1; 
            }
            break;
          case 'sub':  
            if(carts.quantity >= 1){
              carts.quantity -= 1;
              state.totalAmount -= carts.price * 1; 
            }
            break;
          default: break;
        }  
      }
    },
    addCartItemQuantity: (state,action)=>{
      const index = state.carts.findIndex(c=> c.id == action.payload.id);
      if(index != -1 && index != null){
        state.carts[index].quantity += 1;
        state.totalAmount += state.carts[index].price * 1; 
      }
    },
    subCartItemQuantity: (state,action)=>{
      const index = state.carts.findIndex(c=> c.id == action.payload.id);
      if(index != -1 && index != null){
        state.carts[index].quantity -= 1;
        state.totalAmount -= state.carts[index].price * 1; 
      }
    },
    addToCart: (state, action) => {
      const payload = action.payload;
      console.log("reducer addToCart action", payload);

      let cartId = payload.title + payload.caption;
      let isProductExist = state.carts.find((p) => p.id === cartId);
      if (!isProductExist) {
        const cartProduct = {
          id: cartId,
          productId:payload.id,
          productQuantity: payload.quantity,
          title: payload.title,
          img: payload.img,
          price: payload.price,
          quantity: 1,
        };

        const calculatedAmount = cartProduct.price * cartProduct.quantity;
        console.log("calculatedAmount: " + calculatedAmount);

        let updatedState = {
          ...state,
          carts: [...state.carts, cartProduct],
          totalAmount: state.totalAmount + calculatedAmount,
        };

        saveInLocal("cartState", updatedState);

        return (state = updatedState);
      }

      // console.log('add to Cart',state);
    },
    removeFromCart: (state, action) => {
      console.log("state", state, "action", action);
      const {id, img, price, quantity, title} = action.payload;

      let isProductExist = state.carts.find((p) => p.id === id);
      if (isProductExist) {
        let productAmount = parseInt(price) * parseInt(quantity);
        let updatedState = {
          ...state,
          carts: state.carts.filter((p) => p.id !== id),
          totalAmount: state.totalAmount - productAmount
        };

        saveInLocal("cartState", updatedState);
        return (state = updatedState);
      }
    },
  },
});

export const { addToCart, removeFromCart, cartQuantityControl,addCartItemQuantity,subCartItemQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
