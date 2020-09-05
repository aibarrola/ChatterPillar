import React from 'react'
import Post from './post'
import './homepage.css'

function postList(){
    return(
        <section>
            <div className="postList">
                <h1> Feed </h1>
                <Post status="I failed my class" name="James" />
                <Post status="I'm dropping out " name="Angelo" />
                <Post status="I hate angelo" name="Vinh" />
            </div>
        
        </section>
    )
}

export default postList