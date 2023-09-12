import { Link, useLocation } from "react-router-dom"
import { calculateExp } from "../utils/common"
import { useDispatch, useSelector } from "react-redux"
import { toggleDrawMenu } from "../utils/drawMenuSlice"
import { toggleDarkMode } from "../utils/darkModeSlice"
import { useEffect } from "react"

const Header = () => {
    const dispatchAction = useDispatch()
    const experience = calculateExp()
    const location = useLocation()
    console.log("Hi",location.pathname == "/")
    
    const isDark = useSelector((store) => store.darkMode.isDark)
    useEffect(() => {
        isDark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    },[isDark])
    return(
        <div className="bg-white border-x-0 text-black shadow-lg dark:bg-black dark:text-white dark:border-b-2 dark:border-b-purple-900 h-[10%] justify-between flex items-center p-5">
            <div className="">               
                <Link to={"/"}>
                    <span className="mr-3 text-2xl">Frontend Developer</span>
                </Link>
                <span className="bg-slate-100 text-black dark:bg-slate-500 dark:text-white text-sm rounded-lg p-2">{experience}</span>
            </div>
            <div className="pr-5 flex items-center">
                {location.pathname !== "/" ? (<i onClick={() => dispatchAction(toggleDrawMenu())} className="las la-bars text-2xl cursor-pointer lg:hidden"></i>) : null}
                <span className="text-blue-900 font-bold dark:text-blue-400 ml-2 text-sm">Light</span>
                <i onClick={() => dispatchAction(toggleDarkMode())} className={`las ${isDark ? "la-toggle-on" : "la-toggle-off"} text-blue-400 text-2xl ml-2 cursor-pointer`}></i>
                <span className="text-blue-900 font-bold dark:text-blue-400 ml-2 text-sm">Dark</span>
            </div>
        </div>
    )
}

export default Header