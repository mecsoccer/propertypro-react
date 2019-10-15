import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions';
import { ReactComponent as Logo } from './img/logo-dark.svg';
import CtaButton from './CtaButton';
import Modal from './Modal';
import './styling/Signin.css';
import './styling/Form.css';
import './styling/Responsive.css';

class Signin extends React.Component {
  componentDidUpdate() {
    this.authenticate();
    document.querySelector('#signin-modal').classList.add('off');
  }

  validateFields = () => {
    const errors = [];
    const emailError = document.querySelector('#email-error');
    const passwordError = document.querySelector('#password-error');

    const { email, password } = this.collectCredentials();

    if (email === '') errors.push(emailError);
    if (password === '') errors.push(passwordError);

    return (errors.length) ? errors : true;
  }

  renderError = (formError) => {
    formError.forEach(error => {
      error.classList.remove('off');
    });
  }

  collectCredentials = () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    return { email, password };
  }

  authenticate = () => {
    const authenticated = this.props.auth.isSignedIn;
    if (!authenticated) return this.renderError([document.querySelector('#auth-error')]);
  }

  onSubmit = () => {
    const formValidation = this.validateFields();
    if (formValidation !== true) return this.renderError(formValidation);
    this.props.signin(this.collectCredentials());
    document.querySelector('#signin-modal').classList.remove('off');
  }

  render() {
    return (
      <>
        <Modal content={<div className="loader"></div>}/>
        <div className="mask">
          <div className="logo-div">
              <a href="/">
                <Logo />
              </a>
          </div>
          <div className="sign-in">
              <div className="page-title accent-color1 sign-in-title">User Signin</div>
              <p id="auth-error" className="error off">Incorrect email or password *</p>

              <div className="">
                <span id="email-error" title="email field is required" className="error off"> *</span>
                <input type="text" id="email" className="twelvecol text-field" placeholder="your email"/>
              </div>
              <div className="">
                <span id="password-error" title="password field is required" className="error off"> *</span>
                <input type="password" id="password" className="twelvecol text-field" placeholder="Password"/>
              </div>

              <CtaButton value="SIGN IN" action={this.onSubmit}/>
              
              <div className="center-text margin-top40">
                <a className="twelvecol accent-color1 format-link" href="/signin">Forgot password?</a>
                  <span className="or dom-color">OR</span>
                <a className="twelvecol accent-color1 format-link" href="/signup">Signup</a>
              </div>
          </div>
        </div>
      </>  
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { signin })(Signin);
