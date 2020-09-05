import React from 'react'
import './homepage.css'

function post(props){
    return(
        <section>
            <div className="post">
                <h4> {props.status} </h4> 
                <h5 className="post-author"> By {props.name} </h5>
            </div>
       
        </section>
    )
};


export default post