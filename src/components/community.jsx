import Image from "next/image";
import "../app/styles/community.css"; 

export default function ProfileSection() {
  return (
    <div className="profile-section">

        <div className="profile-image">
        <Image
          src="/images/traveller.png" 
          alt="Travel Expert"
          width={250}
          height={250}
          className="circle-img"
        />
      </div>
      
      <div className="profile-text">
        <h2>Client Review</h2>
         <p>
         I had an amazing experience using this platform!
         Booking my hotel and car was so easy and fast. 
         Everything was exactly as described, and the customer
         service was super helpful. I'll definitely be using it again
         for my next trip!<br/><br/>
         LAURA NZIZA <br/>
         </p>
        <p>
            5
            <Image
          src="/images/star.png" 
          alt="Travel Expert"
          width={20}
          height={20}
          style={{verticalAlign: "middle"}}
        />
        </p>

      </div>

      
    </div>
  );
}
