import React from 'react';
import Navigation from '../Navigation';

function Header() {
    return (
        <header className='d-flex justify-content-between'>
            <h1>Leithen</h1>
            <Navigation />
        </header>
    );
}

export default Header;