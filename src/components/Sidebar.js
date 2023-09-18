import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { toggleDrawMenu } from "../utils/drawMenuSlice"

const Sidebar = ({screenWidth}) => {
    const isDrawMenu = useSelector((store) => store.drawMenu.isDrawMenu)
    const dispatchAction = useDispatch()
    const handleLinkClick = () => {
        if(isDrawMenu)
            dispatchAction(toggleDrawMenu())
    }
    return(
        <div className={`px-5 flex h-auto shadow-lg lg:self-end ${!isDrawMenu && (screenWidth < 1024) ? 'hidden' : ''}`}>
            <ul className="h-full flex flex-col lg:flex-row justify-between flex-grow gap-5 items-center text-xl text-center">
                <Link to={"/docs"}><li onClick={handleLinkClick} className="my-3 cursor-pointer hover:font-bold">Getting Started</li></Link>
                <Link to={"/docs/skills"}><li onClick={handleLinkClick} className="my-3 cursor-pointer hover:font-bold">Skills</li></Link>
                <Link to={"/docs/life"}><li onClick={handleLinkClick} className="my-3 cursor-pointer hover:font-bold">Experiences & Education</li></Link>
                <Link to={"/docs/showcase"}><li onClick={handleLinkClick} className="my-3 cursor-pointer hover:font-bold">Showcase</li></Link>
            </ul>
        </div>
    )
}

export default Sidebar