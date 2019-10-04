import React from 'react';

class CtaButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.action} className="dom-color-bg white centered sign-in-button pointer">
            {this.props.value}
        </button>
      </div>
    );
  }
}

export default CtaButton;
