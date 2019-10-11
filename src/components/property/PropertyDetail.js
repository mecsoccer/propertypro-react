import React from 'react';
import Header from '../Header';
import '../styling/Property-detail.css';

class PropertyDetail extends React.Component {
  render() {
    return (
      <>
      <div className="detail-container">
        <Header />

        <div className="back-btn-div">
            <a className="back-btn capitalize" href="./properties.html">View More</a>
        </div>

        <div className="detail-main">
            <div className="images-panel">
                <div className="big-img-div centered fit">
                    <img src="./img/prop2.jpg" />
                </div>
                <div className="address-div">
                    <div>No. 36 araromi street, onike, Yaba, Lagos</div>
                    <img src="./img/location.svg" className="location-svg" />
                </div>
                <div className="small-img">
                    <div>
                        <div className="sm-img-div">
                            <img src="./img/night-view.jpg" className="sm-img" />
                        </div>
                        <p className="align-center">Night View</p>
                    </div>
                    <div>
                        <div className="sm-img-div">
                            <img src="./img/back-view.jpg" className="sm-img" />
                        </div>
                        <p className="align-center">Back View</p>
                    </div>
                    <div>
                        <div className="sm-img-div">
                            <img src="./img/inside-view.jpg" className="sm-img" />
                        </div>
                        <p className="align-center">Inside View</p>
                    </div>
                </div>
            </div>
            <div className="detail-panel">
                <div className="centered">
                    <h3 className="panel-header">Price</h3>
                    <span className="twenty bold accent-fg-3 lt-pd-30">&#x20A6;10,000,000.00</span>
                </div>
                <div className="centered">
                    <h3 className="panel-header">Contact Owner</h3>
                    <p className="lt-pd-30">08093608025</p>
                    <span className="lt-pd-30">owner@owner.com</span>
                </div>
                <div className="centered">
                    <h3 className="panel-header">Status</h3>
                    <span className="status-el dom-color lt-pd-30">available for rent</span>
                </div>
                <div className="centered">
                    <h3 className="panel-header">Property Type</h3>
                    <span className="lt-pd-30">Duplex</span>
                </div>
                <div className="centered">
                    <button className="sold-btn accent-bg-3">Mark as Sold</button>
                </div>
            </div>
        </div>

        <div className="footer accent-bg-1">
            <p className="white-text align-center">© PropertyPro-lite, 2019</p>
        </div>
    </div>

    <div id="myModal" className="form-modal">
        <div className="property-form delete-property-form">
            <span className="right modal-close-btn pointer">x</span>
            <div>
                <p>Are you sure to mark this property as sold?</p>
                <button className="form-btn dom-color-bg">Cancel</button>
                <button className="form-btn accent-bg-3">Sold</button>
            </div>
        </div>
    </div>
    </>
    );
  }
}

export default PropertyDetail;
