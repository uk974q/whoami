import { Link } from "react-router-dom"

const Dashboard = () => {
    return(
        <div className="grid grid-cols-2 place-items-center  dark:bg-black h-[90%]">
            <div className="rounded-full h-64 w-64 bg-black border-gray-400 dark:bg-slate-50 dark:border-white border-2"></div>
            <div className="flex flex-col justify-center items-center gap-8 text-black dark:text-white">
                <div className="relative">
                    <h1 className="text-[64px] w-[max-content]  before:border-l-2 before:absolute before:inset-0 before:bg-white dark:before:bg-black before:animate-typewriter">Hello, World!</h1>
                </div>
                <p className="relative before:inset-0 before:absolute text-[32px] w-[max-content] before:bg-white dark:before:bg-black before:animate-fades">I'm Ullas</p>
                <div className="mt-3">
                    <Link to={"/docs"}>
                        <button className="bg-gray-600 text-gray-50 dark:bg-slate-300 font-bold dark:text-slate-900 p-3 rounded-2xl hover:bg-yellow-300 hover:text-black">Read Docs</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard