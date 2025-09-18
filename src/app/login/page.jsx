'use client';
import '../styles/login.css';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function LoginPage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        router.push("/dashboard");
      } else {
        alert(data.msg || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }
  };



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

         <div className="google-button" onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
                   <img src="/images/google.png" alt="Google icon" />
                   <span>Login With Google</span>
                 </div>

          </form>
        </div>
      </div>
    </div>
  );
}
