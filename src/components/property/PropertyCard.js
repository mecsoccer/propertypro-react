import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropertyEdit from './PropertyEdit';
import PropertyDelete from './PropertyDelete';
import { selectProperty, showFormModal } from '../../actions';
import LocationIcon from '../img/location.svg';
import DeleteIcon from '../img/delete.svg';
import EditIcon from '../img/edit.svg';

class Property extends React.Component {
  showUpdatePropertyForm = () => {
    this.props.selectProperty(this.props.detail);
    this.props.showFormModal(<PropertyEdit />);
  }

  showDeletePropertyForm = () => {
    this.props.selectProperty(this.props.detail);
    this.props.showFormModal(<PropertyDelete />);
  }

  renderMockImage = (imageUrl) => {
    if (imageUrl === '' || imageUrl === 'https://img.com/img/house.png') {
      return 'http://res.cloudinary.com/jaachi/image/upload/v1571073395/pmtekyucnv3ofjj9debe.jpg';
    }
    return imageUrl;
  }

  renderUpdateDelete() {
    if (this.props.detail.owner.toString() === sessionStorage.getItem('user_id')) {
      return (
        <>
          <img alt="img" src={DeleteIcon} onClick={this.showDeletePropertyForm} className="delete right" />
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
                    <img alt="img" src={this.renderMockImage(this.props.detail.image_url)} />
                </div>
            </Link>
            <div className="property-desc">
                <div>
                    <span className="cost twenty accent-fg-3">&#x20A6;{this.props.detail.price}</span>
                    <img className="location" alt="img" src={LocationIcon} />
                </div>
                <p className="street bold">{this.props.detail.address}</p>
                <div>
                    <span className="city">{this.props.detail.city}, {this.props.detail.state} state</span>
                    {this.renderUpdateDelete()}
                </div>
            </div>
        </div>
    );
  }
}

export default connect(null, { selectProperty, showFormModal })(Property);
