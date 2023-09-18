import React from 'react'
import { SHOWCASE_NOTE } from '../utils/constants'
import ShowcaseCard from './ShowcaseCard'

const Showcase = () => {
    const projects = SHOWCASE_NOTE.projects.map(el => (
        <ShowcaseCard key={el.projectName} value={el}/>
    ))  
    return (
        <div className='px-5 mt-5 flex flex-col items-center gap-5'>
            <p>{SHOWCASE_NOTE.heading}</p>
            {projects}
        </div>
    )
}

export default Showcase