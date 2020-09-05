import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"

function Signin(){
    let history = useHistory();
    const[password, setPassword] = useState("");
    const[email, setEmail] = useState("");

    const handleSignIn = e=> {
        e.preventDefault();
        const mail = {
            email: email
        }
        axios.post('http://localhost:5000/users',mail)
        .then(res =>{
                if(res.data[0].password.localeCompare(password)==0){
                    history.push('/home');
                    localStorage.setItem('email',email);
                    localStorage.setItem('firstName', res.data[0].firstname);
                    localStorage.setItem('lastName', res.data[0].lastname);
                }else{
                    alert("Incorrect email or password. Try again or continue as guest");
                }
        })
        .catch(err => alert("Incorrect email or password"));
    
    }


    return(
        <section>
        <h1 className="header1"> College Social Network </h1>

        <div className="signUpContainer">
            <h2 className="header2"> Login </h2>
            <div class="row">
                <form class="col s12" onSubmit = {handleSignIn}>

                    <div class="row">
                        <div class="input-field col s12">
                        <input id="email" type="email" class="validate" onChange={e => setEmail(e.target.value)} />
                        <label for="email">Email</label>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="password" type="password" class="validate" onChange={e => setPassword(e.target.value)}/>
                            <label for="password">Password</label>
                        </div>
                    </div>

                    <button class="btn black waves-effect waves-light" type="submit" name="action"> Login
                        <i class="material-icons right"></i>
                    </button>
                    <Link class="btn-flat" to="/home"> Continue as Guest </Link>


                  
                </form>
            </div>
        </div>
    </section>
    );
}


export default Signin;