import { configureStore } from "@reduxjs/toolkit";
import drawMenuSlice from "./drawMenuSlice";
import darkModeSlice from "./darkModeSlice";

const appStore = configureStore({
    reducer:{
        drawMenu: drawMenuSlice,
        darkMode: darkModeSlice
    }
})

export default appStore