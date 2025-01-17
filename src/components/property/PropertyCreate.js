import React from 'react';
import {connect } from 'react-redux';
import { createProperty, closeFormModal } from '../../actions';
import PropertyForm from './PropertyForm';

class PropertyCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createProperty(formValues);
  }

  onCloseButtonClick = () => {
    this.props.closeFormModal();
  }

  render () {
    return (
      <div className="property-form add-property-form">
        <span className="right modal-close-btn pointer" onClick={this.onCloseButtonClick}>x</span>
        <h4 className="align-center no-margin bold twenty accent-fg-1">Add a Property</h4>
        <PropertyForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createProperty, closeFormModal })(PropertyCreate);
