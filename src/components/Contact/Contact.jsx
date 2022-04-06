import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [errorMessage, setErrorMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [formState, setFormState] = useState({ user_name: '', user_email: '', message: '' });
    const re = /\S+@\S+\.\S+/;

    function validateEmail(email) {
        return re.test(String(email).toLowerCase())
    };

    function clearError() {
        setEmailError('');
    };

    function updateForm(evt) {
        evt.preventDefault();
        if (evt.target.name === 'user_email') {
            if (!validateEmail(evt.target.value.trim())) {
                setEmailError('Invalid email!');
                setFormState({...formState, user_email: null});
            } else {
                setEmailError('');
                setFormState({...formState, user_email: evt.target.value});
            }
        } else {
            setFormState({...formState, [evt.target.name]: evt.target.value});
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        
        if (!formState.user_name || !formState.message) {
            setErrorMessage('All fields must be filled out!');
            setTimeout(() => setErrorMessage(''), 3000);
            return;
        } else if (!formState.user_email) {
            setErrorMessage('Email must be valid!');
            setTimeout(() => setErrorMessage(''), 3000);
            return;
        }

        emailjs.sendForm('service_x13vu2u', 'contact_form', form.current, 'user_hpWDafSMgABPbGLjcRlHt')
        .then((result) => {
            console.log(result.text);
            document.location.reload();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section>
            <h1 className='text-center m-2'>Send me an email 📧</h1>
            <form className='m-auto p-2 d-flex flex-column w-50' ref={form} onSubmit={sendEmail}>
                <div>
                    <label className='p-1' htmlFor='user_name'>Name:</label>
                    <input className='w-100' name='user_name' defaultValue={formState.user_name}  onChange={updateForm}/>
                </div>
                <div>
                    <label className='p-1' htmlFor='user_email'>Email:</label>
                    <input className='w-100' name='user_email' defaultValue={formState.user_email} onChange={updateForm} onBlur={clearError}/>
                </div>
                {emailError && (
                    <p className="text-danger text-center m-0 p-1">{emailError}</p>
                )}
                <div>
                    <label className='p-1' htmlFor='message'>Message:</label>
                    <textarea className='w-100' name='message' rows='3'defaultValue={formState.message}  onChange={updateForm}/>
                </div>
                {errorMessage && (
                    <p className="text-danger text-center m-0 p-1">{errorMessage}</p>
                )}
                <button className='m-2 btn btn-secondary' type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default Contact;