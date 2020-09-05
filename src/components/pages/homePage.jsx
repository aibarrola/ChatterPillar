import React from 'react'
import Navbar from '../../components/navbar'
import Feed from '../../components/feed'
import { useLocation } from 'react-router-dom'


function Home(){
let location = useLocation();
    console.log(location.email);
    return(
        <section>
            <Navbar /> 
            <Feed />           
        </section>
    );
}


export default Home;