import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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

    const handleOnBlur=(e) => {
        const { target } = e;
        const inputValue = target.value;

        if(!inputValue) {
            setErrorMessage(
                'All Fields Are Required'
            ); return;
        } else {
            setErrorMessage(null);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage(
                'Invalid email address, please try again.'
            );
            return;
        } else if (!firstName || !lastName || !message) {
            setErrorMessage(
                'All Fields Are Required'
            ); return;
        }
        
        alert('Thank you! Your message has been sent.');

        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    }

    return (
        <div className="contact-page">
            <h1 id="contact-title">Contact Form</h1>
            <p>Feel free to send me a short message using the form below. <br></br>You can also contact me through the links at the bottom of the page</p>
            <form className="form" >
                <div className="row"> 
                    <label htmlFor="inputFirstName">First Name</label>
                <input
                value={firstName}
                name="firstName"
                onBlur={handleOnBlur}
                onChange={handleInputChange}
                required
                type="text"
                placeholder="First Name"
                id="inputFirstName"
                />
                    <label htmlFor="inputLastName">Last Name</label>
                <input
                value={lastName}
                name="lastName"
                onBlur={handleOnBlur}
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Last Name"
                id="inputLastName"
                />
                </div>
                <div className="row">
                    <label htmlFor="inputEmail">Email</label>
                <input
                value={email}
                name="email"
                onBlur={handleOnBlur}
                onChange={handleInputChange}
                required
                type="email"
                placeholder="example@gmail.com"
                id="inputEmail"
                />
                <div className="row">
                </div>
                    <label htmlFor="inputMessage">Message</label>
                <input
                value={message}
                name="message"
                onBlur={handleOnBlur}
                onChange={handleInputChange}
                required
                type="text"
                placeholder="Type your message here."
                id="inputMessage"
                />
                </div>
                <button className="btn btn-primary btn-sm" type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div>
    );
}