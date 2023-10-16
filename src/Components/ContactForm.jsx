import React, { useState } from 'react';

export default function ContactForm(props) {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className='formWrapper'>
            <form className={props.class} onSubmit={handleSubmit}>
                <label>
                    <input className={props.inputClass} placeholder='Full Name' type="text" value={fullName} onChange={(event) => setFullName(event.target.value)} />
                </label>
                <label>
                    <input className={props.inputClass} placeholder='Phone number' type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
                </label>
                <label>
                    <input className={props.inputClass} placeholder='Email' type="email" value={emailAddress} onChange={(event) => setEmailAddress(event.target.value)} />
                </label>
                <label>
                    <textarea className={props.inputClass} placeholder='Message' value={message} onChange={(event) => setMessage(event.target.value)} />
                </label>
                <button className={props.buttonClass} type="submit">Submit</button>
            </form>
        </div>
    );
}