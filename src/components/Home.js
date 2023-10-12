import React from 'react'
import '../components/Home.css'

export const Home = () => {
  return (
    <div>
        <header class="header">
        <h1 class="logo"><a href="#">Tasty Treasures</a></h1>
            <ul class="main-nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#login">Login</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header> 
        <div className='home' id='home'>
            <div class="main-banner">
                <div class="item">
                    <div class="header-text">
                        <span class="category">Are you cooking? <em>Cook with us.</em></span>
                        <h2> Hurry! Discover quick and tasty recipes.</h2>
                    </div>
                </div>
            </div>
      </div>
      <div className='about' id='about'>
            <div class="about_section">
                <div class="container">
                    <div class="row">
                        <div class="first-row">
                            <div class="about_taital_main">
                                <div class="about_taital">About Us</div>
                                <p class="about_text">At Tasty Treasures, we're all about sharing great recipes. Sign up and log in to access a world of delicious dishes. Join our community and leave comments to inspire others. Let's cook up something great together.</p>
                                <p class="about_text">Let's explore the world of flavors together and make your culinary journey unforgettable. Enjoy cooking!</p>
                            </div>
                        </div>
                        <div class="second-row">
                            <div className='about_img'>
                                
                            </div>
                        </div>
                </div>
            </div>
      </div>
        </div>
    <div className='login' id='login'>
        <div class="signin"> 

            <div class="content"> 
                <h2>Register | Login</h2> 
                    <div class="form"> 
                        <div class="inputBox"> 
                            <input type="text" required/> <i>Username</i> 
                        </div> 
                        <div class="inputBox"> 
                            <input type="password" required/> <i>Password</i> 
                        </div> 
                        {/* <div class="links"> <a href="#">Forgot Password</a> <a href="#">Signup</a> 
                        </div>  */}
                        <div class="inputBox"> 
                            <input type="submit" value="Login"/> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div>
    </div>
  )
}
