import React from 'react'


function navbar(){
    return(
        <section>
            <nav>
                <div class="nav-wrapper">
                <a href="/home" class="brand-logo">College Social Network</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="sass.html">Feed</a></li>
                    <li><a href="badges.html">Inbox</a></li>
                    <li><a href="collapsible.html">Logout</a></li>
                </ul>
                </div>
            </nav>
        </section>
    );
}


export default navbar;