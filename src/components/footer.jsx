import Image from "next/image";
import "../app/styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/instagram.png" alt="App Store" width={45} height={45} />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/github.png" alt="Google Play" width={45} height={45} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/facebook.png" alt="Google Play" width={45} height={45} />
        </a>
      </div>

      
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Travel Booking. All rights reserved.
      </p>
    </footer>
  );
}
