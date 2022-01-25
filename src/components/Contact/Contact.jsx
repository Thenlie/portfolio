function Contact() {
    return (
        <section>
            <h1>Contact</h1>
            <form>
                <div className='m-2'>
                    <label htmlFor='name'>Name:</label>
                    <input name='name' />
                </div>
                <div className='m-2'>
                    <label htmlFor='email'>Email:</label>
                    <input name='email' />
                </div>
                <div className='m-2'>
                    <label htmlFor='message'>Message:</label>
                    <input name='message' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default Contact;