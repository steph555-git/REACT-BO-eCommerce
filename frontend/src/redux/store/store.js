import { configureStore } from "@reduxjs/toolkit";
import subNavSlice from "../slices/subNav.slice";

export default configureStore({
    // c'est ici que le reducer prend son nom // 
    reducer: {
        subNav: subNavSlice,
    },
})
