import React from 'react';

function Header() {
    return (
    <div>  
      <header id="header" className="fixed-top d-flex align-items-center  header-transparent ">
      <div className="container d-flex align-items-center">
  
        <div className="logo mr-auto">
          <h1 className="text-light"><a href="index.html">Landing</a></h1>
          <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
        </div>
  
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active"><a href="index.html">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
  
          </ul>
        </nav>
  
      </div>
      </header>
  </div>
    );
}

export default Header;
