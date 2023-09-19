import { createSlice } from "@reduxjs/toolkit";
import products from '../../data/products';
import ProductMode from "../../enums/ProductMode";
import uniqid from 'uniqid';

const initialState = {
    products:products,
    selectedIndex:0,    
    mode: ProductMode.display
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state,action) => {
      console.log("addProduct",action.payload);
      let prod = {...action.payload,id:uniqid()};
      prod.imgs = [];
      prod.imgs[0] = {id:uniqid(),img:action.payload.img};
      state.products.push(prod);
    },
    editProduct:(state,action)=>{
      const {id,title,caption,img,price} = action.payload;
      console.log('payload',action.payload);
      return state;
    },
    deleteProduct:(state,action)=>{
      const id = action.payload;
      let products = state.products.filter((p)=>p.id !== id);
      console.log("delete Products", action.payload);
      
      return state = {
        ...state,
        products
      }
      // let index = state.products.indexOf(product);
      // delete state.products[index];
      // state.products[index].isDeleted = true;
    },
    loadProduct: (state) => {
      state;
    },
    selectedProduct: (state,action)=>{
      const index = action.payload;
      console.log('selectedProduct',action);
      

      if(index !== undefined && typeof index === 'number'){
        state.selectedIndex = index;
        state.mode = ProductMode.display;
      }
    },
    changeMode: (state,action)=>{
      const mode = action.payload;
      state.mode = mode;
    }
  },
});

export const {addProduct, loadProduct, selectedProduct,changeMode, deleteProduct} = productSlice.actions;
export default productSlice.reducer;

