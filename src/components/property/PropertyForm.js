import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PropertyForm extends React.Component {
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
        <label htmlFor="price" className="col-25">{label}:</label>{this.renderError(meta)}
        <input {...input} className="form-field col-75" autoComplete="off" />
      </>
    );
  }

  renderSelectOptions = ({ input, label, meta }) => {
    return (
      <>
        <label htmlFor="price" className="col-25">{label}:</label>{this.renderError(meta)}
        <select {...input} className="form-field col-75" autoComplete="off">
          <option>select property type</option>
          <option>self contained</option>
          <option>2 bedroom flat</option>
          <option>3 bedroom flat</option>
        </select>
      </>
    );
  }

  renderImageFile = ({ input, label, meta }) => {
    return (
      <>
      <label className="col-25">{label}:</label>
      <input id="image" accept="image/*" type="file" name={input.name} className="form-field col-75" />
      </>
    );
  }

  onSubmit = (formValues) => {
    const formData = new FormData();
    const { price, state, city, address, type } = formValues;
    const image = document.querySelector('#image');

    formData.append('price', price);
    formData.append('state', state);
    formData.append('city', city);
    formData.append('address', address);
    formData.append('type', type);
    formData.append('image', image.files[0]);
    
    this.props.onSubmit(formData);
  }

  render () {
    return (
      <form className="top-margin-20" encType="multipart/form-data" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="price" component={this.renderInput} label="Price(&#x20A6;)" />
        <Field name="state" component={this.renderInput} label="Enter a state" />
        <Field name="city" component={this.renderInput} label="Enter a city" />
        <Field name="address" component={this.renderInput} label="Enter address" />
        <Field name="type" component={this.renderSelectOptions} label="Choose type" />
        <Field name="image" component={this.renderImageFile} label="Upload image" />
        <button className="form-btn dom-color-bg">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.price) {
    errors.price = 'Please enter a price';
  }
  if (!formValues.state) {
    errors.state = 'Please enter a state';
  }
  if (!formValues.city) {
    errors.city = 'Please enter a city';
  }
  if (!formValues.address) {
    errors.address = 'Please enter an address';
  }
  if (!formValues.type || formValues.type === 'select property type') {
    errors.type = 'Please select a type';
  }

  return errors;
}

export default reduxForm({
  form: 'propertyForm',
  validate
})(PropertyForm);
