import React, { useState } from 'react';
import axios from 'axios';
import './footerForm.css';


export default function FooterForm(props) {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const API_LINK = process.env.REACT_APP_API_LINK;

        const data = {
            fullName: fullName,
            Phone: phoneNumber,
            Email: emailAddress,
            Message: message
        }

        axios.post(API_LINK, data)
        setFullName('');
        setPhoneNumber('');
        setEmailAddress('');
        setMessage('');
    };

    return (
        <div className='footerFormInnerWrapper' >
            <form className={props.class} onSubmit={handleSubmit}>
                <div className='formRow'>
                    <div className='formColumn'>
                        <label className='footerLabel'>
                            <input required="True" className={props.inputClass} placeholder='Full Name' type="text" name='fullName' value={fullName} onChange={(event) => setFullName(event.target.value)} />
                        </label>
                        <label className='footerLabel'>
                            <input required className={props.inputClass} placeholder="Phone number" type="tel" name="Phone" value={phoneNumber} pattern="[0-9]{11}" minLength={11} maxLength={11} onChange={(event) => setPhoneNumber(event.target.value)}/>
                        </label>
                        <label className='footerLabel'>
                            <input required="True" className={props.inputClass} placeholder='Email' type="email" name='Email' value={emailAddress} onChange={(event) => setEmailAddress(event.target.value)} />
                        </label>
                    </div>
                    <div className='formColumn'>
                        <label className='footerLabel'>
                            <textarea className={props.inputClass} placeholder='Message' name='Message' value={message} onChange={(event) => setMessage(event.target.value)} />
                        </label>
                    </div>
                </div>
                <button className="footerSubmit" type="submit">Submit</button>
            </form>
        </div>
    );
}