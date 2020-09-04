import React from 'react'


function signin(){
    return(
        <section>
        <h1 className="header1"> College Social Network </h1>

        <div className="signUpContainer">
            <h2 className="header2"> Login </h2>
            <div class="row">
                <form class="col s12">

                    <div class="row">
                        <div class="input-field col s12">
                        <input id="email" type="email" class="validate" />
                        <label for="email">Email</label>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="password" type="password" class="validate" />
                            <label for="password">Password</label>
                        </div>
                    </div>

                    <button class="btn black waves-effect waves-light" type="submit" name="action"> Login
                        <i class="material-icons right"></i>
                    </button>

                  
                </form>
            </div>
        </div>
    </section>
    );
}


export default signin;