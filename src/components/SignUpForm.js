import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './styling/Signup.css';
import './styling/Responsive.css';

class Signup extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <span className="error"> * {error}</span>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <>
        {this.renderError(meta)}
        <div>
          <input {...input} className="twelvecol text-field" placeholder={label} autoComplete="off"/>
        </div>
      </>
    );
  }

  renderPasswordInput = ({ input, label, meta }) => {
    return (
      <>
        {this.renderError(meta)}
        <div>
          <input {...input} type="password" className="twelvecol text-field" placeholder={label} autoComplete="off"/>
        </div>
      </>
    );
  }

  renderSelectOptions = ({ input, label, meta }) => {
    return (
      <>
        {this.renderError(meta)}
        <select {...input} className="role twelvecol text-field" autoComplete="off">
          <option>select role</option>
          <option>agent</option>
          <option>client</option>
        </select>
      </>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form className="top-margin-20" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="email" component={this.renderInput} label="email" />
        <Field name="first_name" component={this.renderInput} label="enter first name" />
        <Field name="last_name" component={this.renderInput} label="enter last name" />
        <Field name="password" component={this.renderPasswordInput} label="enter password" />
        <Field name="confirm_password"  component={this.renderPasswordInput} label="retype password" />
        <Field name="phone_number" component={this.renderInput} label="enter phone number"/>
        <Field name="address" component={this.renderInput} label="enter your address"/>
        <Field name="role" component={this.renderSelectOptions} label="enter address" />
        <button className="form-btn dom-color-bg">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.email) {
    errors.email = 'Please enter a valid email';
  }
  if (!formValues.first_name) {
    errors.first_name = 'Please enter your first name';
  }
  if (!formValues.last_name) {
    errors.last_name = 'Please enter your last name';
  }
  if (!formValues.password) {
    errors.password = 'Please enter a password';
  }
  if (!formValues.confirm_password || formValues.confirm_password !== formValues.password) {
    errors.confirm_password = 'Please retype your password';
  }
  if (!formValues.phone_number) {
    errors.phone_number = 'Please enter your phone number';
  }
  if (!formValues.role || formValues.role === 'select property type') {
    errors.role = 'Please select a role';
  }

  return errors;
}

export default reduxForm({
  form: 'userForm',
  validate
})(Signup);
