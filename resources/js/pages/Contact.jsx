import React from 'react';
import './Contacts.css';
import HomeLayout from '../layouts/HomeLayout';

const Contact = () => {
    return (
        <HomeLayout><div className="contact-container">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us using the form below or through our contact details.</p>
        <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
        </form>
        <div className="contact-details">
            <h2>Contact Details</h2>
            <p>Email: contact@ourcompany.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Address: 1234 Street Name, City, Country</p>
        </div>
    </div></HomeLayout>
        
    );
};

export default Contact;
