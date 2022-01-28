function Navigation(props) {
    const {currentCategory, setCurrentCategory} = props;
    return (
        <ul className='d-flex list-group-horizontal mb-0 h-50 mt-4'>
            <li className={`m-1 list-group-item list-group-item-dark ${currentCategory === 'about' && 'text-primary'}`} onClick={() => setCurrentCategory('about')}>About Me</li>
            <li className={`m-1 list-group-item list-group-item-dark ${currentCategory === 'portfolio' && 'text-primary'}`} onClick={() => setCurrentCategory('portfolio')}>Portfolio</li>
            <li className={`m-1 list-group-item list-group-item-dark ${currentCategory === 'contact' && 'text-primary'}`} onClick={() => setCurrentCategory('contact')}>Contact</li>
            <li className={`m-1 list-group-item list-group-item-dark ${currentCategory === 'resume' && 'text-primary'}`} onClick={() => setCurrentCategory('resume')}>Resume</li>
        </ul>
    );
}

export default Navigation;