import React from 'react';
import Navbar from '../Navbar/index';
import './Header.css';

export default function Header ({ currentPage, handlePageChange }) {
  return (
    <header> 
        <div className="header">
            <h1 className="header-name">Ryan Dalby</h1>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
    </header>
    );
};


