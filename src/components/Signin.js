import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions';
import { ReactComponent as Logo } from './img/logo-dark.svg';
import './styling/Signin.css';
import './styling/Responsive.css';

class Signin extends React.Component {
  collectCredentials = () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    return JSON.stringify({ email, password });
  }

  onSubmit = () => {
    this.props.signin(this.collectCredentials());
  }

  render() {
    return (
      <div className="mask">
        <div className="logo-div">
            <a href="/">
              <Logo />
            </a>
        </div>
        <div className="sign-in">
            <div className="page-title accent-color1 sign-in-title">Sign in as an Agent</div>
            <div className="">
              <input type="text" id="email" className="twelvecol text-field" placeholder="your email"/>
            </div>
            <div className="">
              <input type="password" id="password" className="twelvecol text-field" placeholder="Password"/>
            </div>
            <div className="">
                <button onClick={this.onSubmit}  className="dom-color-bg white centered sign-in-button pointer">
                  SIGN IN
                </button>
            </div>
            <div className="center-text margin-top40">
              <a className="twelvecol accent-color1 format-link" href="#">Forgot password?</a>
                <span className="or dom-color">OR</span>
              <a className="twelvecol accent-color1 format-link" href="/signup">Signup</a>
            </div>
        </div>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {  };
};

export default connect(mapStateToProps, {signin})(Signin);
