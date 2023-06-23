import {createSlice} from '@reduxjs/toolkit'


const userslice=createSlice({
    name:'user',
    initialState:[],
    reducers:{
      
        adduser(state,action){
            console.log("push")
            
            state.push(action.payload)
        }



    }
})


export default userslice
export const {adduser}=userslice.actions