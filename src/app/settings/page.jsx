"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/settings.css'

export default function Settings() {
    const [generalSettings, setGeneralSettings] = useState({
        language: 'English',
        currency: 'USD',
        theme: 'light'
    })

    const [notificationSettings, setNotificationSettings] = useState({
        push: true,
        email: true,
        sms: false
    })

    const [privacySettings, setPrivacySettings] = useState({
        accountVisibility: 'public',
        showEmail: true,
        showPhone: false
    })

    
    const handleGeneralChange = (setting, value) => {
        setGeneralSettings(prev => ({
            ...prev,
            [setting]: value
        }))
        console.log(`${setting} changed to:`, value)
    }

    
    const handleNotificationChange = (type) => {
        setNotificationSettings(prev => ({
            ...prev,
            [type]: !prev[type]
        }))
        console.log(`${type} notifications:`, !notificationSettings[type])
    }

    
    const handlePrivacyChange = (setting, value) => {
        setPrivacySettings(prev => ({
            ...prev,
            [setting]: value
        }))
        console.log(`${setting} changed to:`, value)
    }

   
    const handleResetPassword = () => {
        console.log('Reset password clicked')
        
    }

    
    const handleDeleteAccount = () => {
        if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            console.log('Account deletion confirmed')
            
        }
    }

    
    const handleSaveSettings = () => {
        console.log('Settings saved:', {
            general: generalSettings,
            notifications: notificationSettings,
            privacy: privacySettings
        })
       
        alert('Settings saved successfully!')
    }

    return (
        <div className="settings-container">
            <div className="settings-content">
                
                <div className="settings-header">
                    <div className="header-left">
                        <h1>Settings</h1>
                        <p>Customize your account preferences</p>
                    </div>
                    <div className="header-actions">
                        <button className="save-btn" onClick={handleSaveSettings}>
                            💾 Save Changes
                        </button>
                        <Link href="/dashboard" className="back-to-dashboard">
                            <Image src="/images/home.png" alt="Dashboard" width={20} height={20} />
                            <span>Back to Dashboard</span>
                        </Link>
                    </div>
                </div>

                
                <div className="settings-section">
                    <h2>General Settings</h2>
                    <div className="settings-grid">
                        <div className="setting-item">
                            <div className="setting-info">
                                <h3>Language</h3>
                                <p>Choose your preferred language</p>
                            </div>
                            <div className="setting-control">
                                <select
                                    value={generalSettings.language}
                                    onChange={(e) => handleGeneralChange('language', e.target.value)}
                                    className="settings-dropdown"
                                >
                                    <option value="English">English</option>
                                    <option value="Kinyarwanda">Kinyarwanda</option>
                                    <option value="French">French</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="German">German</option>
                                </select>
                            </div>
                        </div>

                        <div className="setting-item">
                            <div className="setting-info">
                                <h3>Currency</h3>
                                <p>Select your preferred currency</p>
                            </div>
                            <div className="setting-control">
                                <select
                                    value={generalSettings.currency}
                                    onChange={(e) => handleGeneralChange('currency', e.target.value)}
                                    className="settings-dropdown"
                                >
                                    <option value="USD">USD ($)</option>
                                    <option value="EUR">EUR (€)</option>
                                    <option value="GBP">GBP (£)</option>
                                    <option value="RWF">RWF (₣)</option>
                                    <option value="JPY">JPY (¥)</option>
                                </select>
                            </div>
                        </div>

                        <div className="setting-item">
                            <div className="setting-info">
                                <h3>Theme</h3>
                                <p>Choose your preferred appearance</p>
                            </div>
                            <div className="setting-control">
                                <div className="theme-toggle">
                                    <button
                                        className={`theme-btn ${generalSettings.theme === 'light' ? 'active' : ''}`}
                                        onClick={() => handleGeneralChange('theme', 'light')}
                                    >
                                        ☀️ Light
                                    </button>
                                    <button
                                        className={`theme-btn ${generalSettings.theme === 'dark' ? 'active' : ''}`}
                                        onClick={() => handleGeneralChange('theme', 'dark')}
                                    >
                                        🌙 Dark
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="settings-section">
                    <h2>Notification Settings</h2>
                    <div className="settings-grid">
                        <div className="setting-item">
                            <div className="setting-info">
                                <h3>Push Notifications</h3>
                                <p>Receive notifications on your device</p>
                            </div>
                            <div className="setting-control">
                                <label className="toggle-switch">
                                    <input
                                        type="checkbox"
                                        checked={notificationSettings.push}
                                        onChange={() => handleNotificationChange('push')}
                                    />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                        </div>

                        <div className="setting-item">
                            <div className="setting-info">
                                <h3>Email Notifications</h3>
                                <p>Receive notifications via email</p>
                            </div>
                            <div className="setting-control">
                                <label className="toggle-switch">
                                    <input
                                        type="checkbox"
                                        checked={notificationSettings.email}
                                        onChange={() => handleNotificationChange('email')}
                                    />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                        </div>

                        <div className="setting-item">
                            <div className="setting-info">
                                <h3>SMS Notifications</h3>
                                <p>Receive notifications via text message</p>
                            </div>
                            <div className="setting-control">
                                <label className="toggle-switch">
                                    <input
                                        type="checkbox"
                                        checked={notificationSettings.sms}
                                        onChange={() => handleNotificationChange('sms')}
                                    />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="settings-section">
                    <h2>Privacy & Security</h2>
                    <div className="settings-grid">
                        <div className="setting-item">
                            <div className="setting-info">
                                <h3>Account Visibility</h3>
                                <p>Control who can see your profile</p>
                            </div>
                            <div className="setting-control">
                                <select
                                    value={privacySettings.accountVisibility}
                                    onChange={(e) => handlePrivacyChange('accountVisibility', e.target.value)}
                                    className="settings-dropdown"
                                >
                                    <option value="public">Public</option>
                                    <option value="friends">Friends Only</option>
                                    <option value="private">Private</option>
                                </select>
                            </div>
                        </div>

                        <div className="setting-item">
                            <div className="setting-info">
                                <h3>Show Email</h3>
                                <p>Display your email to other users</p>
                            </div>
                            <div className="setting-control">
                                <label className="toggle-switch">
                                    <input
                                        type="checkbox"
                                        checked={privacySettings.showEmail}
                                        onChange={() => handlePrivacyChange('showEmail', !privacySettings.showEmail)}
                                    />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                        </div>

                        <div className="setting-item">
                            <div className="setting-info">
                                <h3>Show Phone</h3>
                                <p>Display your phone number to other users</p>
                            </div>
                            <div className="setting-control">
                                <label className="toggle-switch">
                                    <input
                                        type="checkbox"
                                        checked={privacySettings.showPhone}
                                        onChange={() => handlePrivacyChange('showPhone', !privacySettings.showPhone)}
                                    />
                                    <span className="toggle-slider"></span>
                                </label>
                            </div>
                        </div>

                        <div className="setting-item">
                            <div className="setting-info">
                                <h3>Reset Password</h3>
                                <p>Change your account password</p>
                            </div>
                            <div className="setting-control">
                                <button className="action-btn" onClick={handleResetPassword}>
                                    🔐 Reset Password
                                </button>
                            </div>
                        </div>

                        <div className="setting-item danger-zone">
                            <div className="setting-info">
                                <h3>Delete Account</h3>
                                <p>Permanently remove your account and all data</p>
                            </div>
                            <div className="setting-control">
                                <button className="danger-btn" onClick={handleDeleteAccount}>
                                    🗑️ Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="settings-footer">
                    <p>All changes are automatically saved when you click "Save Changes"</p>
                </div>
            </div>
        </div>
    )
}
