import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Form () {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        return name === setFullName(value)
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you! Your message has been sent.`);
        setFullName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <h1>Contact Form</h1>
            <form className="form">
                <input
                value={fullName}
                name="fullName"
                onChange={handleInputChange}
                type="text"
                placeholder="Full Name"
                />
                <input 
                value={email}
                name="email"
                onChange={handleInputChange}
                type="text"
                placeholder="Email Address"
                />
                <input
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholders="Type your message here."
                />
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}