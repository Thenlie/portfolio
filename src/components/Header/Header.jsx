import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
    const { currentCategory, setCurrentCategory } = props;
    return (
        <header className='d-flex justify-content-between'>
            <h1>Leithen</h1>
            <Navigation currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
        </header>
    );
}

export default Header;