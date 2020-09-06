import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../navbar'

import './join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
  <section>
    <Navbar />
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Chat Now</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" value ={localStorage.getItem('firstName')}onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Create or join a room</button>
        </Link>
      </div>
    </div>
    </section>
  );
}
