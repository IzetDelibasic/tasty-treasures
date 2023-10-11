import React from 'react'
import '../components/Home.css'

export const Home = () => {
  return (
    <div>
        <header class="header">
        <h1 class="logo"><a href="#">Tasty Treasures</a></h1>
            <ul class="main-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header> 
        <div class="main-banner">
            <div class="owl-carousel owl-banner">
                <div class="item item-1">
                    <div class="header-text">
                        <span class="category">Are you cooking? <em>Cook with us.</em></span>
                        <h2> Hurry! Discover quick and tasty recipes.</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
