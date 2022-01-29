import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
    const { currentCategory, setCurrentCategory } = props;
    return (
        <header className='d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between p-2' style={{backgroundImage: `url('./assets/img/tie-dye.jpg')`, backgroundSize: 'cover'}}>
            <h1 className='pt-4 text-lg-start text-center'>Leithen</h1>
            <Navigation currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
        </header>
    );
}

export default Header;