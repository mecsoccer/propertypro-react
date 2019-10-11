import React from 'react';
import {connect } from 'react-redux';
import Loader from '../Loader';
import { updateProperty, getSingleProperty } from '../../actions';
import PropertyForm from './PropertyForm';

class PropertyEdit extends React.Component {
  onSubmit = (formValues) => {
    const propertyDetails = {...this.props.property}
    this.props.updateProperty(propertyDetails.id, formValues);
  }

  render () {
    return (
      <>
      <div className="property-form update-property-form">
        <span className="right modal-close-btn pointer">x</span>
        <h4 className="align-center no-margin bold twenty accent-fg-1">Update a Property</h4>
        <PropertyForm initialValues={this.props.property} onSubmit={this.onSubmit} />
      </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { property: state.properties.selected }
}

export default connect(mapStateToProps, { updateProperty, getSingleProperty })(PropertyEdit);
