import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import wave from './wave.png'; 
import bg from './bg.svg'

function Login() {
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-container">
      <img class="wave" src={wave} alt="logo" />
      
      <div className="login-content">
      <div class="img">
			<img src={bg} alt="logo" />
		 </div>
        {/* <img
          src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
          alt="logo"
        /> */}
        <button onClick={handleSubmit} className="btn-login">
          Login to continue 
        </button>
      </div>
    </div>
  );
}

export default Login;