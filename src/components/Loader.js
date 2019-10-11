import React from 'react';
const style = {
    height: '100%',
    zIndex: 10,
    position: 'fixed',
};

class Loader extends React.Component {
  render() {
    return (
      <div className="loader-bg" style={style}>
        <div className="loader"></div>
      </div>
    );
  }
}

export default Loader;
