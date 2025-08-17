'use client';
import '../styles/login.css';
import {signIn} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

   
    if (email && password) {
       localStorage.setItem("isLoggedIn", "true");
      router.push('/dashboard') 
    } else {
      alert('Please enter your email and password')
    }
  }


  return (
    <div className="signup-page">
      <div className="signup-container">
        
        <div className="signup-image">
            <div className="signup-image-text">
             <h2>Explore the World,<br/>
                 one Trip at a Time             
             </h2>
            <p>Create your account<br/> 
               to unlock exclusive<br/>
                travel deals and perks</p>
          </div>
        </div>

        
        <div className="signup-form">
          <h1>LOGIN FORM </h1>
          <form onSubmit={handleLogin}>
            <div className='inputs'>
            <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
            </div>
              <div className="terms-wrapper">
                  <input type="checkbox" id="terms" value="accepted" />
                        <label htmlFor="terms">Remember me</label>

                        <a href="/forgot-password" className="forgot-password-link">
                               Forgot password?
                               </a>
                               </div>

            <button type="submit">Login</button>
            <div className="or-divider">
                  <span> or</span>
             </div>

         <div className="google-button" onClick={() => signIn("google")}>
                   <img src="/images/google.png" alt="Google icon" />
                   <span>Login With Google</span>
                 </div>

          </form>
        </div>
      </div>
    </div>
  );
}
