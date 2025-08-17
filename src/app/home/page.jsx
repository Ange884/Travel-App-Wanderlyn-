"use client"
import Navbar from "../../components/Navbar";
import '../styles/home.css'
import Packages from "../../components/Packages";
import TravelCard from "../../components/Travelcard";
import BookSection from "../../components/bookings";
import ProfileSection from "../../components/community";
import Footer from "../../components/footer";

export default function HomePage(){
    const travelData = [
        {
          image: "/images/tajmahal.jpeg",
          title: "Burj Khalifa",
          location: "Kigali, Rwanda",
          stars: "★★★★★",
          price: "500.87"
        },
        {
          image: "/images/elegant.jpeg",
          title: "Eiffel Tower",
          location: "Paris, France",
          stars: "★★★★☆",
          price: "420.50"
        },
        {
          image: "/images/luxury.jpeg",
          title: "Great Wall",
          location: "Beijing, China",
          stars: "★★★★★",
          price: "600.00"
        },
        {
          image: "/images/travel.jpeg",
          title: "Statue of Liberty",
          location: "New York, USA",
          stars: "★★★★★",
          price: "550.75"
        },
        {
          image: "/images/mexico.jpeg",
          title: "Sydney Opera House",
          location: "Sydney, Australia",
          stars: "★★★★☆",
          price: "480.30"
        },
        {
          image: "/images/greece.jpeg",
          title: "Taj Mahal",
          location: "Agra, India",
          stars: "★★★★★",
          price: "510.60"
        }
      ];

    return (

       <>
          <Navbar/>
         <div id="home" className="container">
            <div className="text-section">
                <h2>Visit The Most<br/></h2>
                <h2 className="blue">Beautiful Places In</h2>
                <h2>The World</h2>
               <p>Explore beautiful destinations and create <br/>
                  your perfect trip. Book flights, hotels, and <br/>
                  unique experiences with ease.</p>
            </div>

            <div className="image-section">
                <img src="/images/tropical.jpeg" alt="description"/>
            </div>
            
            <form className="search-bar">
                <input type="text" placeholder="Location" name="location" />
                <input type="date" name="date" />
                <input type="number" placeholder="Guests" min="1" name="guests" />
                <button type="submit">Search</button>
            </form>
         </div>
         
         <div id="packages">
            <Packages/>
         </div>
         
         <div id="destinations" className="travel-section">
            <h1 className='titler'>POPULAR DESTINATIONS</h1>
            <div className="totcards">
                {travelData.map((place, index) => (
                    <TravelCard key={index} {...place} />
                ))}
            </div>
         </div>

         <div id="bookings">
            <BookSection/>
         </div>

         <div id="community">
            <ProfileSection/>
         </div>

         <Footer/>
       </>
    ); 
}
