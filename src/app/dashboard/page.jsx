"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import '../styles/dashboard.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Dashboard(){
    const router = useRouter()

    const handleLogout = () => {
        
        if (confirm('Are you sure you want to logout?')) {
            
            localStorage.removeItem('user')
            sessionStorage.clear()
            
            
            localStorage.removeItem('token')
            localStorage.removeItem('authToken')
            
           
            alert('You have been logged out successfully!')
            
            
            router.push('/login')
        }
    }

    return(
        <div className="dashboard-container">
            <div className="dashboard-sidebar">
                <div className="brand-section">
                    <div className="brand">
                        <Image src="/images/airplane.png" alt="Airplane" width={24} height={24} className="brand-icon" />
                        <span className="brand-name">Wanderlyn</span>
                    </div>
                </div>
                
                <nav className="nav-menu">
                    <ul>
                        <li className="nav-item active">
                            <Image src="/images/home.png" alt="Dashboard" width={26} height={26} className="nav-icon" />
                            <span>Dashboard</span>
                        </li>
                        <li className="nav-item">
                            <Link href="/messages" className="nav-link">
                                <Image src="/images/message.png" alt="Messages" width={26} height={26} className="nav-icon" />
                                <span>Messages</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/notifications" className="nav-link">
                                <Image src="/images/notification-bell.png" alt="Notifications" width={26} height={26} className="nav-icon" />
                                <span>Notifications</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/savedplaces" className="nav-link">
                                <Image src="/images/circle.png" alt="Saved places" width={26} height={26} className="nav-icon" />
                                <span>Saved places</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/account" className="nav-link">
                                <Image src="/images/user.png" alt="Account" width={26} height={26} className="nav-icon" />
                                <span>Account</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/settings" className="nav-link">
                                <Image src="/images/setting.png" alt="Settings" width={26} height={26} className="nav-icon" />
                                <span>Settings</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="logout-section">
                    <button className="logout-btn" onClick={handleLogout}>
                        <span>Logout</span>
                        <Image src="/images/logout.png" alt="Logout" width={20} height={20} className="logout-icon" />
                    </button>
                </div>
            </div>

            <div className="main-content">
                
                <header className="content-header">
                    <div className="greeting">
                        <h1>Hello, Ange</h1>
                        <p>Welcome back! Plan your next Adventure</p>
                    </div>
                    <div className="user-profile">
                        <Image src="/images/profile.jpeg" alt="Profile" width={50} height={50} className="profile-pic" />
                        <div className="user-info">
                            <h3>Nziza Ange</h3>
                            <p>120 destinations</p>
                        </div>
                    </div>
                </header>

                <section className="booking-summary">
                    <div className="summary-card">
                        <h3>Trips Booked</h3>
                        <button className="summary-btn">3 active trips</button>
                    </div>
                    <div className="summary-card">
                        <h3>Hotels Reserved</h3>
                        <button className="summary-btn">2 Hotels</button>
                    </div>
                    <div className="summary-card">
                        <h3>Cars Booked</h3>
                        <button className="summary-btn">1 Car</button>
                    </div>
                </section>

                
                <section className="upcoming-bookings">
                    <h2>Upcoming Bookings</h2>
                    <div className="booking-cards">
                        <div className="booking-card">
                            <Image src="/images/first.jpeg" alt="SelenaHotel" width={200} height={150} className="hotel-image" />
                            <div className="card-content">
                                <h3>Selena Hotel</h3>
                                <p className="location">Kigali, Rwanda</p>
                                <p className="duration">3-5 days</p>
                                <div className="rating">★★★★☆ 4.5</div>
                            </div>
                        </div>
                        <div className="booking-card">
                            <Image src="/images/second.jpeg" alt="Five Star Hotel" width={200} height={150} className="hotel-image" />
                            <div className="card-content">
                                <h3>Five star Hotel</h3>
                                <p className="location">Kigali, Rwanda</p>
                                <p className="duration">3-5 days</p>
                                <div className="rating">★★★★☆ 4.5</div>
                            </div>
                        </div>
                        <div className="booking-card">
                            <Image src="/images/third.jpeg" alt="Chateaux de Marara" width={200} height={150} className="hotel-image" />
                            <div className="card-content">
                                <h3>Chateaux de Marara</h3>
                                <p className="location">Karongi, Kibuye</p>
                                <p className="duration">3-5 days</p>
                                <div className="rating">★★★★☆ 4.5</div>
                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="recent-bookings">
                    <h2>Recent History Bookings</h2>
                    <div className="history-cards">
                        <div className="history-card">
                            <Image src="/images/luxury.jpeg" alt="California" width={120} height={80} className="history-image" />
                            <div className="history-content">
                                <h4>California, USA</h4>
                                <div className="rating">★★★★☆ 4.5</div>
                            </div>
                        </div>
                        <div className="history-card">
                            <Image src="/images/elegant.jpeg" alt="Bangalore" width={120} height={80} className="history-image" />
                            <div className="history-content">
                                <h4>Bangalore</h4>
                                <div className="rating">★★★★☆ 4.5</div>
                            </div>
                        </div>
                        <div className="history-card">
                            <Image src="/images/mexico.jpeg" alt="Manila" width={120} height={80} className="history-image" />
                            <div className="history-content">
                                <h4>Manila</h4>
                                <div className="rating">★★★★☆ 4.5</div>
                            </div>
                        </div>
                        <div className="history-card">
                            <Image src="/images/tajmahal.jpeg" alt="Atlantica" width={120} height={80} className="history-image" />
                            <div className="history-content">
                                <h4>Atlantica</h4>
                                <div className="rating">★★★★☆ 4.5</div>
                            </div>
                        </div>
                    </div>
                </section>                
            </div>
        </div>
    );
}