function About() {
    return (
        <section>
            <h1 className='text-center m-2'>About</h1>
            <p className='m-4 aboutText'>
                Full Stack Web Developer with a background in manufacturing and customer service. Recognized as a fast learner, excellent problem solver and effective collaborator. Recent graduate of the University of Utah’s full stack coding bootcamp. 
            </p>
            <p className='m-4 aboutText'>
                I am currently enrolled in the University of Utah Full Stack Flex Coding Bootcamp. This portfolio showcases some of the projects I have created throughout this course. 
            </p>
            <p className='m-4 aboutText'>
                I was born in Columbus Ohio and raised in Milwaukee Wisconsin. I moved out to Utah a few years ago to be closer to the mountains so I can climb and hike more. I love being outdoors and rock climbing, paragliding, skiing and hiking. I have been working at a climbing company for the past for years at various positions, mostly in manufacturing. Recently I have been working in the warranty department fixing broken gear and doing general customer service work. Feel free to reach out to me with the contact information at the bottom of the page if you want to know more!
            </p>
            <img src='./assets/selfie.jpg' width={250} height={250} className='rounded-circle mx-auto my-5 d-block' alt='Selfie'></img>
        </section>
    );
}

export default About;