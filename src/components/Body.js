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
        <div className={`grid lg:grid-cols-[minmax(200px,220px)_auto] flex-grow dark:text-white dark:bg-black`}>
            <Sidebar />
            <div className={`${isDrawMenu && screenWidth < 1024 ? "hidden" : ""}`}>
                <Outlet />
            </div>
        </div>
    )
}

export default Body