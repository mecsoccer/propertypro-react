import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FormModal from '../FormModal';
import Prop2 from '../img/prop2.jpg';
import NightView from '../img/night-view.jpg';
import InsideView from '../img/inside-view.jpg';
import BackView from '../img/back-view.jpg';
import LocationIcon from '../img/location.svg';
import { getSingleProperty, showFormModal, closeFormModal, markAsSoldProperty } from '../../actions'
import '../styling/Property-detail.css';
import Navigation from '../Navigation';

class PropertyDetail extends React.Component {
  componentDidMount() {
    this.props.getSingleProperty(this.props.match.params.id);
  }

  renderImage(image) {
    const { image_url } = { ...this.props.property };
    return (image_url === '' || String(image_url).startsWith('https://img.com')) ? image : image_url;
  }

  renderForm = () => {
      return (
        <div id="myModal" className="modal">
            <div className="property-form delete-property-form">
                <span
                    className="right modal-close-btn pointer"
                    onClick={() => this.props.closeFormModal()}
                >x</span>
                <div>
                    <p>Are you sure to mark this property as sold?</p>
                    <button className="form-btn dom-color-bg" onClick={() => this.props.closeFormModal()}>Cancel</button>
                    <button
                        className="form-btn accent-bg-3"
                        onClick={() => this.props.markAsSoldProperty(this.props.property.id)}
                    >Sold</button>
                </div>
            </div>
        </div>
      );
  }

  renderMarkAsSold() {
    const { owner } = { ...this.props.property };
    const userId = sessionStorage.getItem('user_id');
    if (userId && Number(userId) === owner) {
      return (
        <button onClick={() => this.props.showFormModal(this.renderForm())} className="sold-btn accent-bg-3">
          Mark as Sold
        </button>
      );
    }
  }

  render() {
    return (
      <>
      <div className="detail-container">
        <Navigation />

        <div className="back-btn-div">
            <Link className="back-btn capitalize" to="/properties">View More</Link>
        </div>

        <div className="detail-main">
            <div className="images-panel">
                <div className="big-img-div centered fit">
                    <img alt="property" src={this.renderImage(Prop2)} />
                </div>
                <div className="address-div">
                    <div>No. 36 araromi street, onike, Yaba, Lagos</div>
                    <img alt="location icon" src={LocationIcon} className="location-svg" />
                </div>
                <div className="small-img">
                    <div>
                        <div className="sm-img-div">
                            <img alt="night view" src={NightView} className="sm-img" />
                        </div>
                        <p className="align-center">Night View</p>
                    </div>
                    <div>
                        <div className="sm-img-div">
                            <img alt="back view" src={BackView} className="sm-img" />
                        </div>
                        <p className="align-center">Back View</p>
                    </div>
                    <div>
                        <div className="sm-img-div">
                            <img alt="inside view" src={InsideView} className="sm-img" />
                        </div>
                        <p className="align-center">Inside View</p>
                    </div>
                </div>
            </div>
            <div className="detail-panel">
                <div className="centered">
                    <h3 className="panel-header">Status</h3>
                    <span className="status-el dom-color lt-pd-30 bold">{{...this.props.property}.status}</span>
                </div>
                <div className="centered">
                    <h3 className="panel-header">Price</h3>
                    <span className="twenty bold accent-fg-3 lt-pd-30">&#x20A6;{{...this.props.property}.price}</span>
                </div>
                <div className="centered">
                    <h3 className="panel-header">Property Type</h3>
                    <span className="lt-pd-30">{{...this.props.property}.type}</span>
                </div>
                <div className="centered">
                    <h3 className="panel-header">Contact Owner</h3>
                    <p className="lt-pd-30">{{...this.props.property}.owner_phone_number}</p>
                    <span className="lt-pd-30">{{...this.props.property}.owner_email}</span>
                </div>
                <div className="centered">
                    {this.renderMarkAsSold()}
                </div>
            </div>
        </div>

        <div className="footer accent-bg-1">
            <p className="white-text align-center">© PropertyPro-lite, 2019</p>
        </div>
    </div>

    <FormModal />
    </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { property: state.properties.property, form: state.properties.form_modal };
}

export default connect(
    mapStateToProps,
    {
        getSingleProperty,
        showFormModal,
        closeFormModal,
        markAsSoldProperty,
    }
)(PropertyDetail);
