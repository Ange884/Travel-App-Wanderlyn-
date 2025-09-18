'use client';
import '../styles/signup.css';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function SignupPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    password:''
  });

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);


  const handleSignup = async (e) => {
  e.preventDefault();
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      router.push("/dashboard"); 
    } else {
      alert(data.msg || "Signup failed");
    }

  } catch (err) {
    console.error(err);
    alert("Network error. Please try again.");
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

         <div className="google-button" onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
  <img src="/images/google.png" alt="Google icon" />
  <span>Sign up With Google</span>
</div>

          </form>
        </div>
      </div>
    </div>
  );
}
