import "./workcardStyles.css"
import React from 'react'
import WorkCard from "./WorkCard"
import workData from './workData'

const Work = () => {
  return <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {workData.map((val,ind) => {
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}

                    />

                )
            })}
           
        </div>
      
    </div>
  
}

export default Work
