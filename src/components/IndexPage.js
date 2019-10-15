import React from 'react';
import whiteLogo from './img/logo-white.svg';
import prop2 from './img/prop2.jpg';
import prop1 from './img/prop1.jpg';
import prop3 from './img/prop3.jpeg';
import LocationIcon from './img/location.svg';
import './styling/Main.css';
import './styling/Properties.css';
import './styling/Index.css';
import './styling/Responsive.css';

class IndexPage extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="intro-img-div">
        <div className="header">
          <div className="site_name pointer"><img alt="pic" src={whiteLogo} /></div>
          <div className="nav">
            <button className="admin_button" title="login in as agent">
              <a href="/signin">Agent</a>
            </button>
            <button className="attendant_button" title="login in as client">
              <a href="/signin">Client</a>
            </button>
          </div>
        </div>
        <h2 className="intro">discover valuable properties</h2>
        <div className="centered">
            <button className="call_action eighteen bold">
              <a href="/properties">GET STARTED</a>
            </button>
        </div>
      </div>
      <div className="index-main">
        <div className="show-case align-center">
          <div className="property">
            <div className="property-image">
                <a href="/properties" className="format-link">
                    <img alt="pic" src={prop2} />
                </a>
            </div>
            <div className="property-desc">
                <div>
                    <span className="cost twenty accent-fg-3">$100,000</span>
                    <img className="location" alt="pic" src={LocationIcon} />
                </div>
                <p className="street bold">no. 36 araromi street, onike</p>
                <div>
                    <span className="city bold">Yaba, Lagos</span>
                </div>
            </div>
          </div>
          <div className="property">
            <div className="property-image">
                <a href="/properties" className="format-link">
                    <img alt="pic" src={prop1} />
                </a>
            </div>
            <div className="property-desc">
                <div>
                    <span className="cost twenty accent-fg-3">$100,000</span>
                    <img className="location" alt="pic" src={LocationIcon} />
                </div>
                <p className="street bold">no. 36 araromi street, onike</p>
                <div>
                    <span className="city bold">Yaba, Lagos</span>
                </div>
            </div>
          </div>
          <div className="property">
            <div className="property-image">
                <a href="/properties" className="format-link">
                    <img alt="pic" src={prop3} />
                </a>
            </div>
            <div className="property-desc">
                <div>
                    <span className="cost twenty accent-fg-3">$100,000</span>
                    <img className="location" alt="pic" src={LocationIcon} />
                </div>
                <p className="street bold">no. 36 araromi street, onike</p>
                <div>
                    <span className="city bold">Yaba, Lagos</span>
                </div>
            </div>
          </div>
          <div className="property">
            <div className="property-image">
                <a href="/properties" className="format-link">
                    <img alt="pic" src={prop1} />
                </a>
            </div>
            <div className="property-desc">
                <div>
                    <span className="cost twenty accent-fg-3">$100,000</span>
                    <img className="location" alt="pic" src={LocationIcon} />
                </div>
                <p className="street bold">no. 36 araromi street, onike</p>
                <div>
                    <span className="city bold">Yaba, Lagos</span>
                </div>
            </div>
          </div>
        </div>
        <div className="client-div accent-bg-2">
          <div className="client-intro align-center accent-fg-1">
            <p>Be the first to hear about new properties in town</p>
            <p>Connect with best agents available</p>
            <p>Choose a perfect home for your family</p>
          </div>
          <div className="client-btn-div align-center">
            <a href="/signup">
              <button className="accent-bg-3 white-text pointer">Become a Client</button>
            </a>
          </div>
        </div>
        <div className="agent-div">
          <div className="agent-intro align-center accent-fg-1">
            <p>Advertise properties seamlessly fast</p>
            <p>Advertise to millions of clients around the world</p>
            <p>Get paid through our platform</p>
          </div>
          <div className="agent-btn-div align-center">
            <a href="/signup">
              <button className="dom-color-bg white-text pointer">Become an Agent</button>
            </a>
          </div>
        </div>
      </div>
      <div className="footer accent-bg-1">
          <p className="white-text align-center">© PropertyPro-lite, 2019</p>
      </div>
    </div>
    );
  }
}

export default IndexPage;
