import React from 'react'
import './signUp.css'
import {Link} from 'react-router-dom'
import M from 'materialize-css'
import axios from 'axios'
import { useState } from "react";
import { useHistory } from "react-router-dom"


function Signup(props){
    let history = useHistory();
    const[firstName,setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[password, setPassword] = useState("");
    const[email, setEmail] = useState("");
    const[bio, setBio] = useState("");

   const handleSubmit = e =>{
    e.preventDefault();
    const user = {
        firstname : firstName,
        lastname : lastName,
        email : email,
        password  : password,
        bio : bio
    }
  
    axios.post('http://localhost:5000/users/add',user)
    .then(res => {console.log(res.data);
         history.push('/home');
        localStorage.setItem('email',email);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        })
    .catch(err => alert("Email has been already taken"));
    
    }
    
    
    return(
        <section>
            <span class="center deep-purple lighten-2 container">
                <h1 className="header1"> Chatterpillar </h1>

            </span>

            <div className="signUpContainer">
                <h2 className="header2"> Register </h2>
                <div class="row">
                    <form class="col s12" onSubmit ={handleSubmit}>
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="first_name" type="text" class="validate" onChange={e => setFirstName(e.target.value)} />
                                <label for="first_name">First Name</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="last_name" type="text" class="validate" onChange={e => setLastName(e.target.value)}/>
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12">
                                <input id="password" type="password" class="validate" onChange={e => setPassword(e.target.value)}/>
                                <label for="password">Password</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12">
                            <input id="email" type="email" class="validate" onChange={e => setEmail(e.target.value)} />
                            <label for="email">Email</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12">
                            <textarea id="bio" class="materialize-textarea" onChange={e => setBio(e.target.value)}></textarea>
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


export default Signup;