import { createSlice } from "@reduxjs/toolkit";

const drawMenuSlice = createSlice({
    name: "drawMenu",
    initialState: {
        isDrawMenu: false
    },
    reducers: {
        toggleDrawMenu: (state) => {
            state.isDrawMenu = !state.isDrawMenu
        },
        setToggleMenuView: (state,actions) => {
            state.isDrawMenu = actions.payload
        }
    }
})

export const {toggleDrawMenu, setToggleMenuView} = drawMenuSlice.actions
export default drawMenuSlice.reducer