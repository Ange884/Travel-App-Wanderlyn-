"use client";

import { useRouter } from "next/navigation";
import "../app/styles/navbar.css"; 

export default function Navbar() {
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navigateToPage = (path) => {
    router.push(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo" onClick={() => scrollToSection('home')}>Wanderlyn</div>
        <ul className="nav-links">
          <li><button onClick={() => scrollToSection('home')}>Home</button></li>
          <li><button onClick={() => scrollToSection('packages')}>Packages</button></li>
          <li><button onClick={() => scrollToSection('destinations')}>Destinations</button></li>
          <li><button onClick={() => scrollToSection('bookings')}>Bookings</button></li>
          <li><button onClick={() => scrollToSection('community')}>Community</button></li>
          <li><button onClick={() => navigateToPage('/login')}>Login</button></li>
          <li><button onClick={() => navigateToPage('/signup')}>Sign up</button></li>
        </ul>
      </div>
    </nav>
  );
}
