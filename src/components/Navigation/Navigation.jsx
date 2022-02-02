function Navigation(props) {
    const {currentCategory, setCurrentCategory} = props;
    return (
        <ul className='d-flex h-50 mt-lg-4 mt-1 mx-auto mx-lg-0 p-0 flex-wrap justify-content-center'>
            <button className={`nav-btn m-1 ${currentCategory === 'about' && 'text-primary'}`} onClick={() => setCurrentCategory('about')}>About Me</button>
            <button className={`nav-btn m-1 ${currentCategory === 'portfolio' && 'text-primary'}`} onClick={() => setCurrentCategory('portfolio')}>Portfolio</button>
            <button className={`nav-btn m-1 ${currentCategory === 'contact' && 'text-primary'}`} onClick={() => setCurrentCategory('contact')}>Contact</button>
            <button className={`nav-btn m-1 ${currentCategory === 'resume' && 'text-primary'}`} onClick={() => setCurrentCategory('resume')}>Resume</button>
        </ul>
    );
}

export default Navigation;