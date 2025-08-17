import { FaCar, FaHotel } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import "../app/styles/bookings.css"; 

export default function BookSection() {
  return (
    <div className="book-section">
      <div className="book-container">
        
        
        <div className="card-box">
         
          <div className="card">
            <div className="card-title">
              <FaCar className="icon" />
              <h2>Book Car</h2>
            </div>
            <p>Book your ride, your way — comfort and convenience at your fingertips.</p>
            <button className="explore-btn">
              Explore more <FaArrowRightLong className="arrow" />
            </button>
          </div>

          
          <div className="card">
            <div className="card-title">
              <FaHotel className="icon" />
              <h2>Book Hotel</h2>
            </div>
            <p>Relax and stay in style — book your ideal hotel now.</p>
            <button className="explore-btn">
              Explore more <FaArrowRightLong className="arrow" />
            </button>
          </div>
        </div>

       
        <FaArrowRightLong className="middle-arrow" />

        
        <div className="image-box">
          <Image
            src="/images/luxury.jpeg"
            alt="Hotel Pool"
            width={400}
            height={350}
            className="main-image"
          />
        </div>
      </div>
    </div>
  );
}
