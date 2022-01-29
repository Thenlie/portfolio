function Project() {
    const projectList = [
        {
            id: 0,
            title: "Only Bands",
            tech: "Handlebars, Tailwind, MVC",
            img: "./assets/onlybands.png",
            description: "The site is a central hub for music info. You can search for an artist, save your favorite artists and albums and even track which concerts you have been to.",
            repo: "https://github.com/Thenlie/OnlyBands",
            live: "https://onlybands.herokuapp.com/",
        },
        {
            id: 1,
            title: "Streamability",
            tech: "Handlebars, Express, MVC",
            img: "./assets/streamability.png",
            description: "Streamability is a collaborative and responsive application made to display where an individual can stream their favorite TV shows and movies.",
            repo: "https://github.com/Thenlie/Streamability",
            live: "https://streamability.herokuapp.com/",
        },
        {
            id: 2,
            title: "Tech Blog",
            tech: "Handlebars, Express, MVC",
            img: "./assets/techblog.png",
            description: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
            repo: "https://github.com/Thenlie/tech-blog",
            live: "https://safe-journey-60844.herokuapp.com/",
        },
        {
            id: 3,
            title: "Password Generator",
            tech: "Handlebars, Express, MVC",
            img: "./assets/passwordgen.png",
            description: "A simple password generator that takes user selected characters and randomizes them to create a unique password.",
            repo: "https://github.com/Thenlie/password-generator",
            live: "https://thenlie.github.io/password-generator/",
        },
        {
            id: 4,
            title: "Note Taker",
            tech: "Handlebars, Express, MVC",
            img: "./assets/notetaker.png",
            description: "An application that can be used to write and save notes. This application was made using an express.js backend and gets note data from a JSON file.",
            repo: "https://github.com/Thenlie/note-taker",
            live: "https://serene-ridge-39054.herokuapp.com/",
        },
        {
            id: 5,
            title: "README Generator",
            tech: "Handlebars, Express, MVC",
            img: "./assets/readmegen.png",
            description: "A simple README file generator made during the U of U coding bootcamp.",
            repo: "https://github.com/Thenlie/readme-generator",
            live: "https://github.com/Thenlie/readme-generator",
        }
    ]
    return (
        <section>
            <h1 className='text-center m-2'>Projects</h1>
            <div className='container'>
                <div className='row'>
                    {projectList.map((project) => (
                        <div key={project.id} className='col-12 col-lg-6 text-center p-2'>
                            <div className='card m-2 p-2 customCard'>

                                <img src={project.img} alt={`Screenshot of ${project.title}`} width='300' height='250' className='m-auto cardImage' />
                                <div className='cardInfo'>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <p>
                                        <a href={project.repo} target='_blank' rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" viewBox="0 0 16 16" className="m-2 bi bi-github">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                            </svg>
                                        </a>

                                        <a href={project.live} target='_blank' rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" viewBox="0 0 16 16" className="m-2 bi bi-box-arrow-up-right">
                                            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                            </svg>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;