import React from 'react'
import Navbar from '../../components/navbar'
import Feed from '../../components/feed'

function home(){
    return(
        <section>
            <Navbar /> 
            <Feed />           
        </section>
    );
}


export default home;