import React, { useState } from 'react';
import '../styles/Contact.css';
import { validateEmail } from '../utils/helpers/helpers';

export default function Form () {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange=(e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType === 'firstName') {
            setFirstName(inputValue);
        } else if (inputType === 'lastName') {
            setLastName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage(
                'Invalid email address, please try again.'
            );
            return;
        }
        alert('Thank you! Your message has been sent.');

        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form className="form" >
                <input
                value={firstName}
                name="firstName"
                onChange={handleInputChange}
                type="text"
                placeholder="First Name"
                />
                <input
                value={lastName}
                name="lastName"
                onChange={handleInputChange}
                type="text"
                placeholder="Last Name"
                />
                <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
                />
                <input
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder="Type your message here."
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div>
    );
}