"use client"
import '../app/styles/packages.css'

export default function Packages(){
    return (
        <>
    
        <h1 className='title'>CATEGORIES</h1>
         <div className="destinations">
           <div className="destination-card">
              <img src="/images/tajmahal.jpeg" alt="Paris" />
             <h3>Taj Mahal</h3>
  </div>

  <div className="destination-card">
      <img src="/images/conrad.jpeg" alt="New York" />
      <h3>New York</h3>
  </div>

  <div className="destination-card">
      <img src="/images/elegant.jpeg" alt="Tokyo" />
      <h3>Greece</h3>
  </div>
  <div className="destination-card">
      <img src="/images/greece.jpeg" alt="Tokyo" />
      <h3>Luxurious</h3>
  </div>
 <div className="destination-card">
      <img src="/images/travel.jpeg" alt="Tokyo" />
      <h3>Luxurious</h3>
  </div>

</div>

</>
    );
}