'use client';
import '../styles/signup.css';
import { signIn } from 'next-auth/react';
 import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignupPage() {

const router = useRouter();
 const [formData, setFormData] =useState({
   name: '',
   email:'',
   password:''
   });


  const handleSignup = (e) => {
    e.preventDefault(); 
    router.push('/dashboard');
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
               to unlock exclusive <br/>
                travel deals and perks</p>
          </div>
        </div>

        
        <div className="signup-form">
          <h1>SIGN UP</h1>
          <form onSubmit={handleSignup}>
            <div className='inputs'>
            <input type="text" placeholder="Username" 
             value={formData.name}
             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required />
            <input type="email" placeholder="Email Address"
              value={formData.email}
                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required />
            <input type="password" placeholder="Password" 
             value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required />
            </div>
              <div className="terms-wrapper">
                  <input type="checkbox" id="terms" value="accepted" />
                        <label htmlFor="terms">I accept the terms & conditions</label>
                               </div>

            <button type="submit">Join us</button>
            <div className="or-divider">
  <span> or</span>
             </div>

         <div className="google-button" onClick={() => signIn("google")}>
  <img src="/images/google.png" alt="Google icon" />
  <span>Sign up With Google</span>
</div>

          </form>
        </div>
      </div>
    </div>
  );
}
