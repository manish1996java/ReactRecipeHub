import { createSlice } from "@reduxjs/toolkit";


const likedSlice = createSlice({
    name: 'liked',
    initialState: {
        likes:[],
    },
    reducers:{
        addLike: function(state,action){
            const product = action.payload;
            console.log("addLike",product);
            if(state.likes.includes(product.id)){
                console.log("if condition");
                const index = state.likes.indexOf(product.id);
                state.likes.splice(index, 1);
            }else{
                console.log("else condition");
                state.likes.push(product.id);
            }

            // if(state.likes.length){
            //     const value = state.likes.some(like=>{
            //         return like.productId === product.id; 
            //     })
            //     console.log("value",value)
            // }else{
            //     state.likes.push({productId:product.id,product:product.title,productImg:product.img});
            // }
        }
    }
})

export const {addLike} = likedSlice.actions;
export default likedSlice.reducer;