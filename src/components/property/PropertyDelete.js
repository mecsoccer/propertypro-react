import React from 'react';
import { connect } from 'react-redux';
import { deleteProperty, closeFormModal } from '../../actions';

class PropertyDelete extends React.Component {
  onDeleteClick = () => {
    const propertyDetails = {...this.props.property}
    this.props.deleteProperty(propertyDetails.id);
  }

  onCancelClick = () => {
    this.props.closeFormModal();
  }

  render() {
    return (
        <div className="property-form delete-property-form">
            <div>
                <p className="align-center">Continue with deleting this property?</p>
                <button className="form-btn accent-bg-3" onClick={this.onDeleteClick}>Delete</button>
                <button className="form-btn dom-color-bg" onClick={this.onCancelClick}>Cancel</button>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return { property: state.properties.selected }
}

export default connect(mapStateToProps, { deleteProperty, closeFormModal })(PropertyDelete);
