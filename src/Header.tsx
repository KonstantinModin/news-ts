import React from 'react';
import Form from './FormComponent';
import './Header.css';

const Header: React.FC<{ show: boolean }> = ({ show }) => {
    return (
        <header className={`App-header${show ? '' : ' hide'}`}>
            <div className="top">
                <h1>News from all over the world</h1>
                <h3>React, Redux, Thunk, TypeScript, Formik</h3>
            </div>
            <Form />
        </header>
    )
}

export default Header;
