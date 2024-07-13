import React from 'react'
import './Login.css';
import { loginUrl } from './spotify';

const Login = () => {
  return (
    <div className='login'>
     <h1>i am the login page</h1>
     
     <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png' width="500" height="214"></img>

     <a href={loginUrl}> LOGIN WITH SPOTIFY</a>
    

    </div>
  );
}

export default Login;