import React from 'react';
import Navigation from '../Navigation';
import tieDye from '../../assets/tie-dye.jpg';

function Header(props) {
    const { currentCategory, setCurrentCategory } = props;
    return (
        <header className='d-flex flex-column flex-lg-row justify-content-center justify-content-lg-end p-2' style={{backgroundImage: `url(${tieDye})`, backgroundSize: 'cover'}}>
            {/* <h1 className='pt-4 text-lg-start text-center'>Leithen</h1> */}
            <Navigation currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
        </header>
    );
}

export default Header;