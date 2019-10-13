import React from 'react';
import { connect } from 'react-redux';

class Modal extends React.Component {
  render() {
    if (!this.props.formModal) {
      return null;
    }

    return (
      <div id="myModal" className="modal">
        {this.props.formModal}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { formModal: state.properties.form_modal };
}

export default connect(mapStateToProps, null)(Modal);
