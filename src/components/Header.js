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
    // console.log("Hi",location.pathname == "/")
    
    const isDark = useSelector((store) => store.darkMode.isDark)
    const toggleBodyColor = (add, remove) => {
        document.getElementById("portfolioApp").classList.add(add)
        document.getElementById("portfolioApp").classList.remove(remove)
    }
    useEffect(() => {
        isDark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
        isDark ? toggleBodyColor('bg-black','bg-slate-100') : toggleBodyColor('bg-slate-100','bg-black')
    },[isDark])
    return(
        <div className="bg-slate-200 border-x-0 text-black shadow-lg dark:bg-slate-900 dark:bg-gradient-to-b dark:from-black dark:text-white  dark:border-b-red-900  justify-between flex items-center p-5">
            <div className="flex items-center">               
                <Link to={"/"}>
                    <span className="mr-3 text-xl lg:text-2xl">Frontend Developer</span>
                </Link>
                <span className="bg-slate-500 text-white dark:bg-slate-500 mt-2 text-sm rounded-lg px-2">{experience}</span>
            </div>
            <div className="ml-5 pr-5 flex items-center">
                {location.pathname !== "/" ? (<i onClick={() => dispatchAction(toggleDrawMenu())} className="las la-bars text-xl cursor-pointer lg:hidden"></i>) : null}
                <span className="text-blue-900 font-bold dark:text-blue-400 ml-2 text-sm">Light</span>
                <i onClick={() => dispatchAction(toggleDarkMode())} className={`las ${isDark ? "la-toggle-on" : "la-toggle-off"} mt-1 text-blue-400 text-xl ml-2 cursor-pointer`}></i>
                <span className="text-blue-900 font-bold dark:text-blue-400 ml-2 text-sm">Dark</span>
            </div>
        </div>
    )
}

export default Header