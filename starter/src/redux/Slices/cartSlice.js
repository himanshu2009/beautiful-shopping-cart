import {createSlice} from "@reduxjs/toolkit";



 export const  cartSlice=createSlice({

    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)
        },

        // here particular jo input param me jo id aayai
        // hai use chodkar baki sab action.payload rahega
        remove:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)
        },
    }


 });


 export const {add,remove}=cartSlice.actions;

 export default cartSlice.reducer;