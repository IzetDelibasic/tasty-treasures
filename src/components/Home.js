import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from './FirebaseConfig';

export const Home = () => {
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
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password) 
        .then((data) => {
          console.log(data, "authData");
          history("/recipe");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  return (
    <div>
      <header className="header">
        <h1 className="logo"><a href="#">Tasty Treasures</a></h1>
        <ul className="main-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
      <div className='home' id='home'>
        <div className="main-banner">
          <div className="item">
            <div className="header-text">
              <span className="category">Are you cooking? <em>Cook with us.</em></span>
              <h2> Hurry! Discover quick and tasty recipes.</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='about' id='about'>
        <div className="about_section">
          <div className="container">
            <div className="row">
              <div className="first-row">
                <div className="about_taital_main">
                  <div className="about_taital">About Us</div>
                  <p className="about_text">At Tasty Treasures, we're all about sharing great recipes. Sign up and log in to access a world of delicious dishes. Join our community and leave comments to inspire others. Let's cook up something great together.</p>
                  <p className="about_text">Let's explore the world of flavors together and make your culinary journey unforgettable. Enjoy cooking!</p>
                </div>
              </div>
              <div className="second-row">
                <div className='about_img'>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            <input name='email' placeholder='Email' /><br />
            <input name='password' placeholder='Password' type='password' /><br /><br />
            <button className='reglog' name='reglog'>{login ? "Login" : "Register"}</button>
        </form>
    </div>

    </div>
  );
}
