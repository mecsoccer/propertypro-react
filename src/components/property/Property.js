import React from 'react';
import { Link } from 'react-router-dom';
import {selectProperty} from '../../actions';
import { connect } from 'react-redux';
import LocationIcon from '../img/location.svg';
import DeleteIcon from '../img/delete.svg';
import EditIcon from '../img/edit.svg';

class Property extends React.Component {
  showUpdatePropertyForm = () => {
    document.getElementById('myModal').style.display = 'block';
    document.querySelector('.update-property-form').style.display = 'block';

    this.props.selectProperty(this.props.detail);
    this.props.listenForModalClose();
  }

  renderUpdateDelete() {
    if (this.props.detail.owner.toString() === sessionStorage.getItem('user_id')) {
      return (
        <>
          <img alt="img" src={DeleteIcon} className="delete right" />
          <img alt="img" src={EditIcon} onClick={this.showUpdatePropertyForm} className="edit right" />
        </>
      );
    }
  }

  render() {
    return (
        <div className="one-property">
            <Link to={`/properties/${this.props.detail.id}`}>
                <div className="property-image">
                    <img alt="img" src={this.props.detail.image_url} />
                </div>
            </Link>
            <div className="property-desc">
                <div>
                    <span className="cost twenty accent-fg-3">${this.props.detail.price}</span>
                    <img className="location" alt="img" src={LocationIcon} />
                </div>
                <p className="street bold">{this.props.detail.address}</p>
                <div>
                    <span className="city bold">{this.props.detail.city}</span>
                    {this.renderUpdateDelete()}
                </div>
            </div>
        </div>
    );
  }
}

export default connect(null, { selectProperty })(Property);
