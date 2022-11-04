import React from 'react';
import Logo from '../img/Milogo.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link} from 'react-router-dom';



function Nav({onSearch}) {
  return (
    <nav className="navbar ">
        <Link to={'/'}>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Nicolas - Weather App!
        </span>   
        </Link>
        <Link to={'/about'} className="abaut">About</Link>
        <SearchBar
          onSearch={onSearch}
        />

    </nav>
  );
};

export default Nav;
