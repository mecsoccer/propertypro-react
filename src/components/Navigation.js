import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signout } from '../actions';
import CloseIcon from './img/nav-close.svg';
import { ReactComponent as Logo} from './img/logo-dark.svg';
import MenuIcon from './img/menu.svg';
import './styling/Nav.css';

const renderAuthButton = (props) => {
  if (sessionStorage.getItem('token')) {
    return (
      <button
        className="curvy-btn auth-btn h40 pointer"
        onClick={() => props.signout()}
      >SIGN OUT</button>
    );
  }
  
  return (
    <button 
      className="curvy-btn auth-btn h40 pointer"
      onClick={() => window.location.assign('/signin')}
    >SIGN IN</button>
  );
}

const Navigation = (props) => {
  const [nav, toggle] = useState('closed');

  const navState = nav === 'closed' ? 'closed' : 'open';

  return (
    <div className={`nav-container ${nav}`}>
      <div className="nav-content">
        <div className="nav-control">
          <div className="nav-logo flex flex-ai-ct pointer" onClick={() => window.location.assign('/')}>
            <Logo />
          </div>
          <div className="nav-cancel"
            onClick={() => nav === 'closed' ? toggle('open') : toggle('closed')}
          >
            <img alt="img" src={nav === 'closed' ? MenuIcon : CloseIcon} className="menu right" />
          </div>
        </div>
        <div className={`flex-cont ${navState}`}>
          <ul className="nav-items">
            <a href="/"><li className="nav-item">About Us</li></a>
            <a href="/"><li className="nav-item">How it Works</li></a>
            <a href="/"><li className="nav-item">Contact Us</li></a>
            <a href="/"><li className="nav-item">FAQs</li></a>
          </ul>
          <div className="nav-buttons">
            {renderAuthButton(props)}
            <button className="curvy-btn download-btn">DOWNLOAD APP</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, {signout})(Navigation);
