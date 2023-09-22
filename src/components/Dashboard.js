import { Link } from "react-router-dom"
import profile from "../assets/profile.png"

const Dashboard = () => {
    return(
        <div className="flex pt-5 flex-col lg:grid lg:grid-cols-2 place-items-center bg-slate-50 dark:bg-black">
            <div className="rounded-full h-64 w-64 bg-black border-gray-400 dark:bg-slate-50 dark:border-slate-200 border-2">
                <img src={profile} alt="profile picture" className="h-full w-full rounded-full"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-8 text-black dark:text-white">
                <div className="relative">
                    <h1 className="text-[48px] lg:text-[64px] w-[max-content]  before:border-l-2 before:absolute before:inset-0 before:text-gray-50 dark:before:bg-black before:animate-typewriter">Hello, World!</h1>
                </div>
                <p className="relative before:inset-0 before:absolute text-[32px] w-[max-content] before:text-gray-50 dark:before:bg-black before:animate-fades">I'm Ullas</p>
                <div className="mt-3 flex justify-center gap-2">
                    <Link to={"/docs"}>
                        <button className="bg-red-800 text-gray-50  font-bold  tracking-wider p-3 rounded-2xl hover:bg-yellow-300 hover:text-black">Read Docs</button>
                    </Link>
                    <Link to={"/docs/skills"}>
                        <button className="bg-gray-600 text-gray-50 font-bold  tracking-wider  p-3 rounded-2xl hover:bg-yellow-300 hover:text-black">Skills</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard