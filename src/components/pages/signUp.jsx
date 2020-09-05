import React from 'react'
import './signUp.css'
import {Link} from 'react-router-dom'
import M from 'materialize-css'



function signup(){

    // const SignUp = ({history}) => {
    //     const handleSignUp = useCallback(
    //         async event => {
    //             event.preventDefault();
    //             const {f_name, l_name, email, password} = event.target.elements;
    //             try{
    //                 await app
    //                 .auth()
    //                 .createUserWithEmailAndPassword(email.value, password.value).then(
    //                     (res) => {
    //                         console.log(res.user)
    //                     }
    //                 );
    //                 history.push("/home");
    //             }catch(err){
    //                 alert(err)
    //             }
    //         },
    //         [history],
    //     )

    return(
        <section>
            <h1 className="header1"> College Social Network </h1>

            <div className="signUpContainer">
                <h2 className="header2"> Register </h2>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="first_name" type="text" class="validate" />
                                <label for="first_name">First Name</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="last_name" type="text" class="validate" />
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password" type="password" class="validate" />
                                <label for="password">Password</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12">
                            <input id="email" type="email" class="validate" />
                            <label for="email">Email</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12">
                            <textarea id="bio" class="materialize-textarea"></textarea>
                            <label for="textarea1">Bio</label>
                            </div>
                        </div>

                        <button class="btn black waves-effect waves-light" type="submit" name="action">Register
                            <i class="material-icons right"></i>
                        </button>

                        
                        <Link class="btn-flat" to="/signin"> Login </Link>

                       

                        
                
                    </form>
                </div>
            </div>
        </section>
    );
}


export default signup;