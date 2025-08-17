"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/notifications.css'

export default function Notifications() {
    const [activeFilter, setActiveFilter] = useState('all')
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'booking',
            icon: '✈️',
            message: 'Your hotel booking in Kigali is confirmed',
            timestamp: '2 hours ago',
            isRead: false,
            details: 'Selena Hotel - Check-in: Dec 15, 2024'
        },
        {
            id: 2,
            type: 'offer',
            icon: '🎉',
            message: 'Special discount: 20% off on Paris flights',
            timestamp: '1 day ago',
            isRead: false,
            details: 'Valid until Dec 31, 2024'
        },
        {
            id: 3,
            type: 'system',
            icon: '🔔',
            message: 'Welcome to Wanderlyn! Complete your profile',
            timestamp: '2 days ago',
            isRead: true,
            details: 'Get personalized travel recommendations'
        },
        {
            id: 4,
            type: 'booking',
            icon: '🏨',
            message: 'Car rental confirmed for your trip to Rwanda',
            timestamp: '3 days ago',
            isRead: true,
            details: 'Pickup: Kigali Airport - Dec 15, 2024'
        },
        {
            id: 5,
            type: 'offer',
            icon: '💎',
            message: 'Exclusive: Luxury hotel deals in Dubai',
            timestamp: '1 week ago',
            isRead: true,
            details: '5-star hotels starting from $150/night'
        },
        {
            id: 6,
            type: 'system',
            icon: '📱',
            message: 'App update available - New features added',
            timestamp: '1 week ago',
            isRead: true,
            details: 'Download the latest version for better experience'
        },
        {
            id: 7,
            type: 'booking',
            icon: '🚗',
            message: 'Flight reminder: Your trip to Paris tomorrow',
            timestamp: '2 hours ago',
            isRead: false,
            details: 'Flight AF1234 - Departure: 10:30 AM'
        },
        {
            id: 8,
            type: 'offer',
            icon: '🌍',
            message: 'Last chance: 30% off on European packages',
            timestamp: '3 hours ago',
            isRead: false,
            details: 'Book by midnight for best rates'
        }
    ])

    const filters = [
        { key: 'all', label: 'All', count: notifications.length },
        { key: 'booking', label: 'Bookings', count: notifications.filter(n => n.type === 'booking').length },
        { key: 'offer', label: 'Offers', count: notifications.filter(n => n.type === 'offer').length },
        { key: 'system', label: 'System', count: notifications.filter(n => n.type === 'system').length }
    ]

    const filteredNotifications = activeFilter === 'all' 
        ? notifications 
        : notifications.filter(notification => notification.type === activeFilter)

    const markAsRead = (id) => {
        setNotifications(prev => 
            prev.map(notification => 
                notification.id === id 
                    ? { ...notification, isRead: true }
                    : notification
            )
        )
    }

    const markAllAsRead = () => {
        setNotifications(prev => 
            prev.map(notification => ({ ...notification, isRead: true }))
        )
    }

    const getUnreadCount = () => {
        return notifications.filter(notification => !notification.isRead).length
    }

    const getTypeColor = (type) => {
        switch(type) {
            case 'booking': return '#667eea'
            case 'offer': return '#28a745'
            case 'system': return '#6c757d'
            default: return '#667eea'
        }
    }

    return (
        <div className="notifications-container">
            <div className="notifications-content">
                
                <div className="notifications-header">
                    <div className="header-left">
                        <h1>Notifications</h1>
                        <span className="unread-badge">{getUnreadCount()} unread</span>
                    </div>
                    <div className="header-actions">
                        <button 
                            className="mark-all-read-btn"
                            onClick={markAllAsRead}
                            disabled={getUnreadCount() === 0}
                        >
                            Mark all as read
                        </button>
                        <Link href="/dashboard" className="back-to-dashboard">
                            <Image src="/images/home.png" alt="Dashboard" width={20} height={20} />
                            <span>Back to Dashboard</span>
                        </Link>
                    </div>
                </div>

                
                <div className="filter-tabs">
                    {filters.map(filter => (
                        <button
                            key={filter.key}
                            className={`filter-tab ${activeFilter === filter.key ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.key)}
                        >
                            <span className="filter-label">{filter.label}</span>
                            <span className="filter-count">{filter.count}</span>
                        </button>
                    ))}
                </div>

                
                <div className="notifications-list">
                    {filteredNotifications.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-icon">📭</div>
                            <h3>No notifications</h3>
                            <p>You're all caught up! Check back later for updates.</p>
                        </div>
                    ) : (
                        filteredNotifications.map(notification => (
                            <div 
                                key={notification.id}
                                className={`notification-card ${!notification.isRead ? 'unread' : ''}`}
                                onClick={() => markAsRead(notification.id)}
                            >
                                <div 
                                    className="notification-icon"
                                    style={{ backgroundColor: getTypeColor(notification.type) + '20' }}
                                >
                                    <span className="icon">{notification.icon}</span>
                                </div>
                                
                                <div className="notification-content">
                                    <div className="notification-header">
                                        <p className="notification-message">{notification.message}</p>
                                        <span className="notification-time">{notification.timestamp}</span>
                                    </div>
                                    <p className="notification-details">{notification.details}</p>
                                    {!notification.isRead && (
                                        <div className="unread-indicator">
                                            <span className="unread-dot"></span>
                                            <span className="unread-text">New</span>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="notification-actions">
                                    <button 
                                        className="action-btn"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            markAsRead(notification.id)
                                        }}
                                        title={notification.isRead ? 'Already read' : 'Mark as read'}
                                    >
                                        {notification.isRead ? '✓' : '○'}
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

               
                <div className="notifications-footer">
                    <p>Showing {filteredNotifications.length} of {notifications.length} notifications</p>
                </div>
            </div>
        </div>
    )
}
