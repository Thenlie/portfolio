function Contact() {
    return (
        <section>
            <h1 className='text-center m-2'>Contact</h1>
            <form className='m-auto p-2 d-flex flex-column w-50'>
                <div>
                    <label className='p-1' htmlFor='name'>Name:</label>
                    <input className='w-100' name='name' />
                </div>
                <div>
                    <label className='p-1' htmlFor='email'>Email:</label>
                    <input className='w-100' name='email' />
                </div>
                <div>
                    <label className='p-1' htmlFor='message'>Message:</label>
                    <textarea className='w-100' name='message' rows='3'/>
                </div>
                <button className='m-2' type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default Contact;