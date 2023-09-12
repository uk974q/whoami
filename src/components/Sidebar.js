import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Sidebar = () => {
    const isDrawMenu = useSelector((store) => store.drawMenu.isDrawMenu)
    return(
        <div className={`border-r-2 border-r-slate-300 dark:border-r-purple-900 dark:border-r-4 shadow-lg ${isDrawMenu ? "" : "hidden"} lg:block`}>
            <ul className="h-full flex flex-col justify-between items-center text-2xl text-center">
                <Link to={"/docs"}><li className="my-3 cursor-pointer hover:font-bold">Getting Started</li></Link>
                <Link to={"/docs/skills"}><li className="my-3 cursor-pointer hover:font-bold">Skills</li></Link>
                <Link to={"/docs/life"}><li className="my-3 cursor-pointer hover:font-bold">Experiences & Education</li></Link>
                <Link to={"/docs/showcase"}><li className="my-3 cursor-pointer hover:font-bold">Showcase</li></Link>
            </ul>
        </div>
    )
}

export default Sidebar