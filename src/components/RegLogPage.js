import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './FirebaseConfig';
import '../components/RegLogPage.css';

export const RegLogPage = () => {
  const [login, setLogin] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/recipe");
        })
        .catch((err) => {
          alert("Racun je vec registrovan !");
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/recipe");
        })
        .catch((err) => {
          alert("Greska prilikom prijavljivanja, provjerite korisnicke podatke !");
        });
    }
  };

  return (
    <div className='login' id='login'>
      <div className="row">
        <div
          className={`form-toggle ${login ? "activeColor" : "pointer"}`}
          onClick={() => setLogin(false)}>
          Register
        </div>
        <div
          className={`form-toggle ${!login ? "activeColor" : "pointer"}`}
          onClick={() => setLogin(true)}>
          Login
        </div>
      </div>
      <h1>{login ? "Login" : "Register"}</h1>
      <hr />
      <form onSubmit={(e) => handleSubmit(e, login ? 'signin' : 'signup')}>
        <div className="inputBox">
          <input name='email' placeholder='Email' />
        </div>
        <div className="inputBox">
          <input name='password' placeholder='Password' type='password' />
        </div>
        <button className='reglog' name='reglog'>{login ? "Login" : "Register"}</button>
      </form>
    </div>
  );
};
