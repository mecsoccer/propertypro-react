import React from 'react';

class PropertyDetail extends React.Component {
  render() {
    return (
      <div>{this.props.match.params.id} PropertyDetail</div>
    );
  }
}

export default PropertyDetail;
