import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { setToggleMenuView } from "../utils/drawMenuSlice"

const Body = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const isDrawMenu = useSelector((store) => store.drawMenu.isDrawMenu)
    const dispatchAction = useDispatch()

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth > 1024){
                dispatchAction(setToggleMenuView(false))
            } 
            setScreenWidth(window.innerWidth)
        })
    },[screenWidth])

    

    return(
        <div className={`flex flex-col dark:text-white dark:bg-black`}>
            <Sidebar screenWidth={screenWidth} />
            <div className={`${isDrawMenu ? "hidden" : ""}`}>
                <Outlet />
            </div>
        </div>
    )
}

export default Body