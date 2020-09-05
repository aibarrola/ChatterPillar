import React from 'react'


function navbar(){
    const handleLogout = e =>{
        localStorage.clear();
    }
    return(
        <section>
            <nav class="navbar">
                <div class="nav-wrapper">
                <a href="/home" class="brand-logo">College Social Network</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="/home">Feed</a></li>
                    <li><a href="/inbox">Let's Chat</a></li>
                    <li><a href="/signin" onClick = {handleLogout}>Logout</a></li>
                </ul>
                </div>
            </nav>
        </section>
    );
}


export default navbar;
