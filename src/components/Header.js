import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../actions';
import { ReactComponent as SearchIcon } from './img/Search.svg';
import { ReactComponent as Logo } from './img/logo-dark.svg';
import MenuIcon from './img/menu.svg';

class Header extends React.Component {
  menuButtonToggle = () => {
    const menuBar = document.querySelector('.menu-drop-down');
    menuBar.classList.toggle('on');
  }

  renderAuthButton() {
    if (sessionStorage.getItem('token')) {
      return 'Signout'
    }
    return 'Signin'
  }

  render() {
    return (
        <>
        <div className="page-nav">
            <div className="page-logo pointer left">
              <Link to="/" onClick={() => window.location.assign('/')}>
                <Logo />
              </Link>
            </div>
            <img alt="img" src={MenuIcon} className="menu right" onClick={this.menuButtonToggle} />
            <div className="search-container left">
                <div className="centered fit">
                    <input type="text" className="search eighteen" placeholder="Seach places" />
                    <button className="search-btn accent-bg-2 pointer">
                      <SearchIcon />
                    </button>
                </div>
            </div>
            <div className="signout">
                <Link to={'/signin'} onClick={() => this.props.signout()} className="format-link">
                    <span className="pointer" >{this.renderAuthButton()}</span>
                </Link>
            </div>
        </div>
        <div className="menu-drop-down">
            <Link to="/signin" onClick={() => this.props.signout()} className="format-link">
                <span>{this.renderAuthButton()}</span>
            </Link>
        </div>
        </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, {signout})(Header);
