function Navigation(props) {
    const {currentCategory, setCurrentCategory} = props;
    return (
        <ul className='d-flex list-group-horizontal mb-0'>
            <li className={`m-1 list-group-item ${currentCategory === 'about' && 'text-warning'}`} onClick={() => setCurrentCategory('about')}>About Me</li>
            <li className={`m-1 list-group-item ${currentCategory === 'portfolio' && 'text-warning'}`} onClick={() => setCurrentCategory('portfolio')}>Portfolio</li>
            <li className={`m-1 list-group-item ${currentCategory === 'contact' && 'text-warning'}`} onClick={() => setCurrentCategory('contact')}>Contact</li>
            <li className={`m-1 list-group-item ${currentCategory === 'resume' && 'text-warning'}`} onClick={() => setCurrentCategory('resume')}>Resume</li>
        </ul>
    );
}

export default Navigation;