// import React from 'react';

function Footer() {
    return (
        <footer className='position-absolute bottom-0 w-100 p-2'>
            <ul className='d-flex list-group-horizontal justify-content-center'>
                <li className={'m-1 list-group-item'}><a href='https://github.com/Thenlie/'>GitHub</a></li>
                <li className={'m-1 list-group-item'}><a href='https://www.linkedin.com/in/leithen-crider-55a294b7/'>LinkedIn</a></li>
                <li className={'m-1 list-group-item'}><a href='https://stackoverflow.com/users/16626860/leithen-crider'>StackOverflow</a></li>
            </ul>
        </footer>
    );
}

export default Footer;