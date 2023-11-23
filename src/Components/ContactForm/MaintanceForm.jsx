import React, { useState } from 'react';
import axios from 'axios';
import './footerForm.css';
import Logo from '../SVG/Logo';


export default function MaintanceForm(props) {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        .then(() => {
                setIsModalOpen(true);
                applyModalActiveClassToAllElements(true);
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
            });

        setFullName('');
        setPhoneNumber('');
        setEmailAddress('');
        setMessage('');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        applyModalActiveClassToAllElements(false);
    };

    const applyModalActiveClassToAllElements = (isActive) => {
        const elements = document.querySelectorAll('*');
        elements.forEach((element) => {
            if (isActive) {
                element.classList.add('modalActive');
            } else {
                element.classList.remove('modalActive');
            }
        });
    };


    return (
        <div className={`maintanceFormInnerWrapper ${isModalOpen ? 'modalActive' : ''}`}>
            <form className={props.class} onSubmit={handleSubmit}>
                <div className='maintanceFormRow'>
                    <div className='maintanceFormColumn'>
                        <label className='maintanceLabel'>
                            <input required="True" className={props.inputClass} placeholder='Full Name' type="text" name='fullName' value={fullName} onChange={(event) => setFullName(event.target.value)} />
                        </label>
                        <label className='maintanceLabel'>
                            <input required className={props.inputClass} placeholder="Phone number" type="tel" name="Phone" value={phoneNumber} pattern="[0-9]{11}" minLength={11} maxLength={11} onChange={(event) => setPhoneNumber(event.target.value)} />
                        </label>
                        <label className='maintanceLabel'>
                            <input required="True" className={props.inputClass} placeholder='Email' type="email" name='Email' value={emailAddress} onChange={(event) => setEmailAddress(event.target.value)} />
                        </label>
                    </div>
                    <div className='maintanceFormColumn'>
                        <label className='maintanceLabel'>
                            <textarea className={props.inputClass} placeholder='Message' name='Message' value={message} onChange={(event) => setMessage(event.target.value)} />
                        </label>
                    </div>
                </div>
                <button className="maintanceSubmit" type="submit">Submit</button>
            </form>
            {isModalOpen && (
                <div className="modal">
                    <div className="modalContent">
                        <Logo />
                        <h3>Thank you for submitting the form!</h3>
                        <p className='modalContent'>We will get in touch with you shortly!</p>
                        <span className="close" onClick={closeModal}>&times;</span>
                    </div>
                </div>
            )}
        </div>
    );
}