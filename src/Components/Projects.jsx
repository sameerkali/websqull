import React from 'react'
import Card from './ProjectCard'
import {myProjects} from "../payload"

export default function Projects({limit}) {
    // if(!limit) {
    //     myProjects=myProjects.splice(myProjects.length,limit)
    // }
    return (
        <div className="myProjects container">
           <div className="row mt-5">
               
                    {
                       myProjects.map((el,index)=>(
                            <div className="col-md-4">
                                <Card image={el.image} name={el.name} description={el.description} index={index}/>
                            </div>
                       ))
                    }
                </div> 
        </div>
    )
}
