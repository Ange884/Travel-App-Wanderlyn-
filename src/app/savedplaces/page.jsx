"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/savedplaces.css'

export default function SavedPlaces() {
    const [searchQuery, setSearchQuery] = useState('')
    const [sortBy, setSortBy] = useState('recent')
    const [savedPlaces, setSavedPlaces] = useState([
        {
            id: 1,
            name: "Eiffel Tower",
            location: "Paris, France",
            image: "/images/burjkhalifa.jpeg",
            rating: 4.8,
            savedDate: "2024-12-01",
            description: "Iconic iron lattice tower on the Champ de Mars in Paris",
            category: "Landmark"
        },
        {
            id: 2,
            name: "Taj Mahal",
            location: "Agra, India",
            image: "/images/tajmahal.jpeg",
            rating: 4.9,
            savedDate: "2024-11-28",
            description: "White marble mausoleum and UNESCO World Heritage site",
            category: "Historical"
        },
        {
            id: 3,
            name: "Santorini",
            location: "Greece",
            image: "/images/greece.jpeg",
            rating: 4.7,
            savedDate: "2024-11-25",
            description: "Stunning island with white-washed buildings and blue domes",
            category: "Island"
        },
        {
            id: 4,
            name: "Machu Picchu",
            location: "Peru",
            image: "/images/luxury.jpeg",
            rating: 4.9,
            savedDate: "2024-11-20",
            description: "Ancient Incan citadel set high in the Andes Mountains",
            category: "Historical"
        },
        {
            id: 5,
            name: "Bali",
            location: "Indonesia",
            image: "/images/tropical.jpeg",
            rating: 4.6,
            savedDate: "2024-11-15",
            description: "Tropical paradise with beautiful beaches and culture",
            category: "Island"
        },
        {
            id: 6,
            name: "Swiss Alps",
            location: "Switzerland",
            image: "/images/elegant.jpeg",
            rating: 4.8,
            savedDate: "2024-11-10",
            description: "Majestic mountain range perfect for skiing and hiking",
            category: "Mountain"
        },
        {
            id: 7,
            name: "Tokyo",
            location: "Japan",
            image: "/images/mexico.jpeg",
            rating: 4.7,
            savedDate: "2024-11-05",
            description: "Modern metropolis blending tradition with innovation",
            category: "City"
        },
        {
            id: 8,
            name: "New York City",
            location: "USA",
            image: "/images/banana.jpeg",
            rating: 4.5,
            savedDate: "2024-11-01",
            description: "The city that never sleeps with endless possibilities",
            category: "City"
        }
    ])

    
    const filteredPlaces = savedPlaces.filter(place =>
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.category.toLowerCase().includes(searchQuery.toLowerCase())
    )

    
    const sortedPlaces = [...filteredPlaces].sort((a, b) => {
        switch (sortBy) {
            case 'rating':
                return b.rating - a.rating
            case 'recent':
                return new Date(b.savedDate) - new Date(a.savedDate)
            case 'alphabetical':
                return a.name.localeCompare(b.name)
            default:
                return 0
        }
    })

    
    const removePlace = (id) => {
        setSavedPlaces(prev => prev.filter(place => place.id !== id))
    }

    
    const toggleFavorite = (id) => {
        setSavedPlaces(prev => 
            prev.map(place => 
                place.id === id 
                    ? { ...place, isFavorite: !place.isFavorite }
                    : place
            )
        )
    }

    
    const renderStars = (rating) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="star full">★</span>)
        }

        if (hasHalfStar) {
            stars.push(<span key="half" className="star half">★</span>)
        }

        const emptyStars = 5 - Math.ceil(rating)
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star empty">☆</span>)
        }

        return stars
    }

    
    const getCategoryColor = (category) => {
        const colors = {
            'Landmark': '#667eea',
            'Historical': '#28a745',
            'Island': '#17a2b8',
            'Mountain': '#6f42c1',
            'City': '#fd7e14'
        }
        return colors[category] || '#6c757d'
    }

    return (
        <div className="saved-places-container">
            <div className="saved-places-content">
                
                <div className="saved-places-header">
                    <div className="header-left">
                        <h1>Saved Places</h1>
                        <span className="places-count">{savedPlaces.length} destinations</span>
                    </div>
                    <div className="header-actions">
                        <Link href="/dashboard" className="back-to-dashboard">
                            <Image src="/images/home.png" alt="Dashboard" width={20} height={20} />
                            <span>Back to Dashboard</span>
                        </Link>
                    </div>
                </div>

                
                <div className="controls-section">
                    <div className="search-container">
                        <div className="search-bar">
                            <div className="search-icon">🔍</div>
                            <input
                                type="text"
                                placeholder="Search saved places..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                        </div>
                    </div>

                    <div className="sort-container">
                        <label htmlFor="sort-select" className="sort-label">Sort by:</label>
                        <select
                            id="sort-select"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="sort-select"
                        >
                            <option value="recent">Most Recent</option>
                            <option value="rating">Highest Rating</option>
                            <option value="alphabetical">Alphabetical</option>
                        </select>
                    </div>
                </div>

                
                <div className="places-grid">
                    {sortedPlaces.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-icon">🗺️</div>
                            <h3>No places found</h3>
                            <p>
                                {searchQuery 
                                    ? `No places match "${searchQuery}". Try a different search term.`
                                    : "You haven't saved any places yet. Start exploring and save your favorites!"
                                }
                            </p>
                        </div>
                    ) : (
                        sortedPlaces.map(place => (
                            <div key={place.id} className="place-card">
                                <div className="card-image-container">
                                    <Image
                                        src={place.image}
                                        alt={place.name}
                                        width={300}
                                        height={200}
                                        className="place-image"
                                    />
                                    <div 
                                        className="category-badge"
                                        style={{ backgroundColor: getCategoryColor(place.category) + '20', color: getCategoryColor(place.category) }}
                                    >
                                        {place.category}
                                    </div>
                                    <button
                                        className="favorite-btn"
                                        onClick={() => toggleFavorite(place.id)}
                                        title={place.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                                    >
                                        {place.isFavorite ? '❤️' : '🤍'}
                                    </button>
                                </div>

                                <div className="card-content">
                                    <div className="place-info">
                                        <h3 className="place-name">{place.name}</h3>
                                        <p className="place-location">📍 {place.location}</p>
                                        <p className="place-description">{place.description}</p>
                                    </div>

                                    <div className="card-footer">
                                        <div className="rating-section">
                                            <div className="stars">
                                                {renderStars(place.rating)}
                                            </div>
                                            <span className="rating-text">{place.rating}</span>
                                        </div>
                                        
                                        <div className="card-actions">
                                            <button
                                                className="remove-btn"
                                                onClick={() => removePlace(place.id)}
                                                title="Remove from saved places"
                                            >
                                                🗑️
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                
                <div className="saved-places-footer">
                    <p>
                        Showing {sortedPlaces.length} of {savedPlaces.length} saved places
                        {searchQuery && ` matching "${searchQuery}"`}
                    </p>
                </div>
            </div>
        </div>
    )
}
