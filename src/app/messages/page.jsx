"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/messages.css'

export default function Messages() {
    const [selectedConversation, setSelectedConversation] = useState(0)
    const [messageInput, setMessageInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')

    const conversations = [
        {
            id: 0,
            name: "John Doe",
            avatar: "/images/profile.jpeg",
            lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            timestamp: "10:40 AM",
            unreadCount: 2,
            isOnline: true,
            lastSeen: "2 min ago"
        },
        {
            id: 1,
            name: "Sarah Wilson",
            avatar: "/images/traveller.png",
            lastMessage: "Thanks for the travel recommendations!",
            timestamp: "9:15 AM",
            unreadCount: 0,
            isOnline: false,
            lastSeen: "1 hour ago"
        },
        {
            id: 2,
            name: "Mike Johnson",
            avatar: "/images/profile.jpeg",
            lastMessage: "When are you planning to visit Paris?",
            timestamp: "Yesterday",
            unreadCount: 1,
            isOnline: true,
            lastSeen: "5 min ago"
        },
        {
            id: 3,
            name: "Emma Davis",
            avatar: "/images/traveller.png",
            lastMessage: "The hotel booking is confirmed",
            timestamp: "2 days ago",
            unreadCount: 0,
            isOnline: false,
            lastSeen: "1 day ago"
        },
        {
            id: 4,
            name: "Alex Chen",
            avatar: "/images/profile.jpeg",
            lastMessage: "Looking forward to our trip!",
            timestamp: "1 week ago",
            unreadCount: 0,
            isOnline: false,
            lastSeen: "3 days ago"
        }
    ]

    const messages = [
        {
            id: 1,
            sender: "user",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            timestamp: "10:35 AM",
            status: "read"
        },
        {
            id: 2,
            sender: "other",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            timestamp: "10:37 AM"
        },
        {
            id: 3,
            sender: "user",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            timestamp: "10:38 AM",
            status: "read"
        },
        {
            id: 4,
            sender: "other",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            timestamp: "10:39 AM"
        },
        {
            id: 5,
            sender: "user",
            text: "Lorem ipsum dolor sit amet",
            timestamp: "10:40 AM",
            status: "sent"
        }
    ]

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            
            console.log('Sending message:', messageInput)
            
            
            const newMessage = {
                id: messages.length + 1,
                sender: "user",
                text: messageInput,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                status: "sending"
            }
            
           
            console.log('New message added:', newMessage)
            setMessageInput('')
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    const simulateTyping = () => {
        setIsTyping(true)
        setTimeout(() => {
            setIsTyping(false)
        }, 3000)
    }

    const addReaction = (messageId, reaction) => {
        console.log(`Adding ${reaction} reaction to message ${messageId}`)
    }

    return (
        
            <div className="messages-content">
                
                <div className="conversations-sidebar">
                    <div className="messages-header">
                        <h1>Messages</h1>
                        <div className="unread-count">
                            {conversations.reduce((total, conv) => total + conv.unreadCount, 0)} unread
                        </div>
                    </div>
                    
                    <div className="search-container">
                        <div className="search-bar">
                            <div className="search-icon">🔍</div>
                            <input 
                                type="text" 
                                placeholder="Search conversations"
                                className="search-input"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="conversations-list">
                        {conversations
                            .filter(conversation => 
                                conversation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                conversation.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
                            )
                            .map((conversation) => (
                            <div 
                                key={conversation.id}
                                className={`conversation-item ${selectedConversation === conversation.id ? 'active' : ''}`}
                                onClick={() => setSelectedConversation(conversation.id)}
                            >
                                <div className="conversation-avatar">
                                    <Image 
                                        src={conversation.avatar} 
                                        alt={conversation.name} 
                                        width={40} 
                                        height={40} 
                                        className="avatar"
                                    />
                                    <div className={`status-indicator ${conversation.isOnline ? 'online' : 'offline'}`}></div>
                                </div>
                                
                                <div className="conversation-details">
                                    <div className="conversation-header">
                                        <h3 className="conversation-name">{conversation.name}</h3>
                                        <span className="conversation-time">{conversation.timestamp}</span>
                                    </div>
                                    <p className="conversation-preview">{conversation.lastMessage}</p>
                                    <div className="conversation-meta">
                                        {conversation.unreadCount > 0 && (
                                            <span className="unread-badge">{conversation.unreadCount}</span>
                                        )}
                                        <span className="last-seen">{conversation.lastSeen}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="logout-section">
                        <Link href="/dashboard" className="back-to-dashboard">
                            <Image src="/images/home.png" alt="Dashboard" width={20} height={20} />
                            <span>Back to Dashboard</span>
                        </Link>
                    </div>
                </div>

                
                <div className="chat-area">
                    <div className="chat-header">
                        <div className="chat-user-info">
                            <Image 
                                src={conversations[selectedConversation]?.avatar || "/images/profile.jpeg"} 
                                alt="User" 
                                width={40} 
                                height={40} 
                                className="chat-avatar"
                            />
                            <div className="user-details">
                                <h2>{conversations[selectedConversation]?.name || "Select a conversation"}</h2>
                                <span className="user-status">
                                    {conversations[selectedConversation]?.isOnline ? 'Online' : 'Offline'}
                                </span>
                            </div>
                        </div>
                        <div className="chat-actions">
                            <button className="action-btn" onClick={simulateTyping} title="Simulate typing">
                                <Image src="/images/notification-bell.png" alt="Mute" width={20} height={20} />
                            </button>
                            <button className="action-btn">
                                <Image src="/images/setting.png" alt="More" width={20} height={20} />
                            </button>
                        </div>
                    </div>

                    <div className="messages-list">
                        {messages.map((message) => (
                            <div 
                                key={message.id}
                                className={`message ${message.sender === 'user' ? 'outgoing' : 'incoming'}`}
                            >
                                <div className="message-bubble">
                                    <p className="message-text">{message.text}</p>
                                    <div className="message-meta">
                                        <span className="message-time">{message.timestamp}</span>
                                        {message.sender === 'user' && (
                                            <span className="message-status">
                                                {message.status === 'sent' && '✓'}
                                                {message.status === 'delivered' && '✓✓'}
                                                {message.status === 'read' && '✓✓'}
                                            </span>
                                        )}
                                    </div>
                                    <div className="message-reactions">
                                        <button 
                                            className="reaction-btn" 
                                            onClick={() => addReaction(message.id, '👍')}
                                            title="Like"
                                        >
                                            👍
                                        </button>
                                        <button 
                                            className="reaction-btn" 
                                            onClick={() => addReaction(message.id, '❤️')}
                                            title="Love"
                                        >
                                            ❤️
                                        </button>
                                        <button 
                                            className="reaction-btn" 
                                            onClick={() => addReaction(message.id, '😊')}
                                            title="Smile"
                                        >
                                            😊
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        {isTyping && (
                            <div className="message incoming">
                                <div className="message-bubble typing-indicator">
                                    <div className="typing-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <span className="typing-text">typing...</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="message-input-container">
                        <div className="input-actions">
                            <button className="action-btn">
                                <div className="action-icon">+</div>
                            </button>
                        </div>
                        
                        <div className="message-input-wrapper">
                            <input
                                type="text"
                                placeholder="Send message"
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="message-input"
                            />
                        </div>
                        
                        <div className="send-actions">
                            <button className="action-btn">
                                <div className="action-icon">🎤</div>
                            </button>
                            <button 
                                className="send-btn"
                                onClick={handleSendMessage}
                                disabled={!messageInput.trim()}
                            >
                                <div className="action-icon">📤</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

    )
}
