"use client";
import Image from "next/image";

export default function TravelCard({ image, title, location, stars, price }) {
  return (
    <div className="travel-card">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="travel-card-image"
      />
      <div className="travel-card-title">{title}</div>
      <div className="travel-card-location">📍 {location}</div>
      <div className="travel-card-stars">{stars}</div>
      <div className="travel-card-price">${price}</div>
      <button className="travel-card-btn">Book Now</button>
    </div>
  );
}
