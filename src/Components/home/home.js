import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div id="App">
            <div>
                <a > <img src="https://i.ibb.co/NLR2JVN/cartoon-image-of-indian-girl-doing-namaste-1-1.png" alt="cartoon-image-of-indian-girl-doing-namaste-1-1" border="0" className='home-img'/></a>
            </div>
            <div className='ai'>
                <p>
                    Arya, Vedic AI Guide
                </p>
            </div>
            <div className='main'>
                <div className="header">
                    <h1>Discover the timeless wisdom of <span>the Vedas</span>.</h1>
                    <p>Sign up and <span> journey through ancient knowledge with Arya 🌟</span></p>
                </div>
                <div className='social-hub'>
                    <img src="https://i.ibb.co/qDKv24L/Social-uihut.png" alt="Social-uihut" border="0" />
                </div>
                <div class="line-or-container">
                    <div class="line"></div>
                    <span class="or">OR</span>
                    <div class="line"></div>
                </div>
                <div className="content">
                    <button className="button">
                    <Link to="/signup" className='arrow-link signup'>Sign up with email</Link>
                    </button>
                    <span className="redirect">
                    <Link to="/login" className='arrow-link login' >Existing account? <span>Log in</span></Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Home;