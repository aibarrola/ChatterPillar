import React from 'react'
import PostList from './postList'


function feed(){
    return(
        <section>
            <form>
                <input type="text"></input>
                <button class="btn black waves-effect waves-light" type="submit" name="action"> Post
                        <i class="material-icons right"></i>
                    </button>
            </form>
            <PostList />
        </section>
    );
}


export default feed;