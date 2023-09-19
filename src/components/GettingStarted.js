import { DETAILS } from "../utils/constants"

const GettingStarted = () => {
    return(
        <div className="ml-5 mt-5 h-full pr-5">
            <h1 className="font-semibold text-sm my-6 text-red-600 dark:text-yellow-200">npm i Ullas</h1>
            <h1 className="font-semibold text-2xl my-6">{DETAILS.summary}</h1>
            <p className="my-4 whitespace-pre-wrap">
                {DETAILS.whomami}
            </p>
            <h1 className="font-semibold text-2xl my-6">{DETAILS.why}</h1>
            <p className="my-4 whitespace-pre-wrap ">{DETAILS.what}</p>
            <h1 className="font-semibold text-2xl my-6">{DETAILS.also}</h1>
            <p className="my-4 whitespace-pre-wrap ">{DETAILS.backend}</p>
            <h1 className="font-semibold text-2xl my-6">{DETAILS.and}</h1>
            <p className="my-4 whitespace-pre-wrap ">{DETAILS.outro}</p>
            <h1 className="font-semibold text-sm my-6 text-red-600 text-yellow-200">npm clean cache</h1>
        </div>
    )
}

export default GettingStarted