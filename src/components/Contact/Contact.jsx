import React, { useState } from 'react';

function Contact() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function handleChange(evt) {
        if (evt.target.name === 'email') {
            const isValid = validateEmail(evt.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid!');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!evt.target.value.length) {
                setErrorMessage(`${evt.target.name} is required!`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [evt.target.name]: evt.target.value});
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1 className='text-center m-2'>Contact</h1>
            <form className='m-auto p-2 d-flex flex-column w-50' onSubmit={handleSubmit}>
                <div>
                    <label className='p-1' htmlFor='Name'>Name:</label>
                    <input className='w-100' name='Name' defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label className='p-1' htmlFor='email'>Email:</label>
                    <input className='w-100' name='email' defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label className='p-1' htmlFor='Message'>Message:</label>
                    <textarea className='w-100' name='Message' rows='3'defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className='m-2' type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default Contact;