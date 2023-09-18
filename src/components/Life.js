import { COMPANIES } from "../utils/constants"

const Life = () => {
    const listOfCompanies = COMPANIES.map(el => (
        <li className="text-xl lg:grid lg:grid-cols-2 gap-2 items-center" key={el.company}>
            <div className="text-sm py-2 lg:text-md lg:text-right dark:text-yellow-300 mr-2">{el.year}</div>
            <div className="flex flex-col gap-2 justify-center border-l-2 pl-2 py-4">
                <span className="text-xl font-bold text-purple-700 dark:text-red-500">
                    <i className={`${el.logo} mr-2 text-black dark:text-white`}></i>
                    {el.company}
                </span>
                <span className="text-sm mt-0 font-semibold dark:font-medium">{el.location}</span>
            </div>
        </li>
    ))
    return(
        <div className="flex justify-center items-center h-full">
            <ul className="w-1/2 mt-5">
                {listOfCompanies}
            </ul>
        </div>

    )
} 

export default Life