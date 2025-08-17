"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/account.css'

export default function Account() {
    const [isEditing, setIsEditing] = useState(false)
    const [userProfile, setUserProfile] = useState({
        name: "Nziza Ange",
        email: "ishimwenzizaangell@gmail.com",
        phone: "+250 792 644 857",
        bio: "Passionate traveler exploring the world one destination at a time. Love discovering new cultures and creating unforgettable memories.",
        profileImage: "/images/profile.jpeg"
    })

    const [bookings] = useState([
        {
            id: 1,
            type: "Hotel",
            name: "Selena Hotel",
            location: "Kigali, Rwanda",
            date: "Dec 15-18, 2024",
            status: "Confirmed"
        },
        {
            id: 2,
            type: "Flight",
            name: "RwandAir",
            location: "Kigali → Paris",
            date: "Jan 20, 2025",
            status: "Booked"
        },
        {
            id: 3,
            type: "Car",
            name: "Hertz Rental",
            location: "Paris Airport",
            date: "Jan 20-25, 2025",
            status: "Confirmed"
        }
    ])

    const [paymentMethods] = useState([
        {
            id: 1,
            type: "Visa",
            number: "**** **** **** 1234",
            expiry: "12/26",
            isDefault: true
        },
        {
            id: 2,
            type: "Mastercard",
            number: "**** **** **** 5678",
            expiry: "08/25",
            isDefault: false
        },
        {
            id: 3,
            type: "PayPal",
            email: "ange.nziza@paypal.com",
            isDefault: false
        }
    ])

    const [travelPreferences] = useState({
        preferredAirlines: ["RwandAir", "Ethiopian Airlines", "Kenya Airways"],
        roomType: "King Bed",
        seatPreference: "Window",
        mealPreference: "Vegetarian",
        language: "English, Kinyarwanda, French"
    })

    const [securitySettings] = useState({
        twoFactorEnabled: true,
        lastPasswordChange: "2 months ago",
        loginNotifications: true
    })

    const handleEditProfile = () => {
        setIsEditing(!isEditing)
    }

    const handleSaveProfile = () => {
        setIsEditing(false)
        console.log('Profile saved:', userProfile)
    }

    const handleInputChange = (field, value) => {
        setUserProfile(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const toggleTwoFactor = () => {
        
        console.log('Two-factor authentication toggled')
    }

    const changePassword = () => {
        
        console.log('Change password clicked')
    }

    return (
        <div className="account-container">
            <div className="account-content">
                
                <div className="account-header">
                    <div className="header-left">
                        <h1>My Account</h1>
                        <p>Manage your profile and preferences</p>
                    </div>
                    <div className="header-actions">
                        <Link href="/dashboard" className="back-to-dashboard">
                            <Image src="/images/home.png" alt="Dashboard" width={20} height={20} />
                            <span>Back to Dashboard</span>
                        </Link>
                    </div>
                </div>

                
                <div className="profile-section">
                    <div className="profile-header">
                        <h2>Profile Information</h2>
                        <div className="profile-actions">
                            {isEditing ? (
                                <>
                                    <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
                                        Cancel
                                    </button>
                                    <button className="btn btn-primary" onClick={handleSaveProfile}>
                                        Save Changes
                                    </button>
                                </>
                            ) : (
                                <button className="btn btn-primary" onClick={handleEditProfile}>
                                    Edit Profile
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="profile-content">
                        <div className="profile-image-section">
                            <div className="profile-image-container">
                                <Image
                                    src={userProfile.profileImage}
                                    alt="Profile"
                                    width={120}
                                    height={120}
                                    className="profile-image"
                                />
                                {isEditing && (
                                    <button className="change-photo-btn">
                                        📷 Change Photo
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="profile-details">
                            <div className="form-group">
                                <label>Full Name</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={userProfile.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        className="form-input"
                                    />
                                ) : (
                                    <p className="profile-value">{userProfile.name}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        value={userProfile.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="form-input"
                                    />
                                ) : (
                                    <p className="profile-value">{userProfile.email}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        value={userProfile.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className="form-input"
                                    />
                                ) : (
                                    <p className="profile-value">{userProfile.phone}</p>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Bio</label>
                                {isEditing ? (
                                    <textarea
                                        value={userProfile.bio}
                                        onChange={(e) => handleInputChange('bio', e.target.value)}
                                        className="form-textarea"
                                        rows="3"
                                    />
                                ) : (
                                    <p className="profile-value">{userProfile.bio}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="section">
                    <h2>My Bookings</h2>
                    <div className="bookings-grid">
                        {bookings.map(booking => (
                            <div key={booking.id} className="booking-card">
                                <div className="booking-icon">
                                    {booking.type === "Hotel" ? "🏨" : 
                                     booking.type === "Flight" ? "✈️" : "🚗"}
                                </div>
                                <div className="booking-info">
                                    <h3>{booking.name}</h3>
                                    <p className="booking-location">{booking.location}</p>
                                    <p className="booking-date">{booking.date}</p>
                                    <span className={`booking-status ${booking.status.toLowerCase()}`}>
                                        {booking.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                
                <div className="section">
                    <h2>Payment Methods</h2>
                    <div className="payment-methods-grid">
                        {paymentMethods.map(method => (
                            <div key={method.id} className="payment-card">
                                <div className="payment-icon">
                                    {method.type === "PayPal" ? "💳" : "💳"}
                                </div>
                                <div className="payment-info">
                                    <h3>{method.type}</h3>
                                    {method.type === "PayPal" ? (
                                        <p>{method.email}</p>
                                    ) : (
                                        <p>{method.number}</p>
                                    )}
                                    {method.type !== "PayPal" && (
                                        <p className="expiry">Expires: {method.expiry}</p>
                                    )}
                                    {method.isDefault && (
                                        <span className="default-badge">Default</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                
                <div className="section">
                    <h2>Travel Preferences</h2>
                    <div className="preferences-grid">
                        <div className="preference-item">
                            <h4>Preferred Airlines</h4>
                            <div className="preference-tags">
                                {travelPreferences.preferredAirlines.map(airline => (
                                    <span key={airline} className="preference-tag">{airline}</span>
                                ))}
                            </div>
                        </div>

                        <div className="preference-item">
                            <h4>Room Type</h4>
                            <p>{travelPreferences.roomType}</p>
                        </div>

                        <div className="preference-item">
                            <h4>Seat Preference</h4>
                            <p>{travelPreferences.seatPreference}</p>
                        </div>

                        <div className="preference-item">
                            <h4>Meal Preference</h4>
                            <p>{travelPreferences.mealPreference}</p>
                        </div>

                        <div className="preference-item">
                            <h4>Languages</h4>
                            <p>{travelPreferences.language}</p>
                        </div>
                    </div>
                </div>

                
                <div className="section">
                    <h2>Security Settings</h2>
                    <div className="security-grid">
                        <div className="security-item">
                            <div className="security-info">
                                <h4>Two-Factor Authentication</h4>
                                <p>Add an extra layer of security to your account</p>
                            </div>
                            <div className="security-action">
                                <span className={`status-badge ${securitySettings.twoFactorEnabled ? 'enabled' : 'disabled'}`}>
                                    {securitySettings.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                                </span>
                                <button className="btn btn-secondary" onClick={toggleTwoFactor}>
                                    {securitySettings.twoFactorEnabled ? 'Disable' : 'Enable'}
                                </button>
                            </div>
                        </div>

                        <div className="security-item">
                            <div className="security-info">
                                <h4>Password</h4>
                                <p>Last changed: {securitySettings.lastPasswordChange}</p>
                            </div>
                            <div className="security-action">
                                <button className="btn btn-primary" onClick={changePassword}>
                                    Change Password
                                </button>
                            </div>
                        </div>

                        <div className="security-item">
                            <div className="security-info">
                                <h4>Login Notifications</h4>
                                <p>Get notified of new login attempts</p>
                            </div>
                            <div className="security-action">
                                <span className={`status-badge ${securitySettings.loginNotifications ? 'enabled' : 'disabled'}`}>
                                    {securitySettings.loginNotifications ? 'Enabled' : 'Disabled'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
