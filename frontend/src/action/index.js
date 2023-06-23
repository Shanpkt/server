import { configureStore } from "@reduxjs/toolkit";
import userslice from "./slice";


const store=configureStore({

   reducer: {users:userslice.reducer}
})


export default store