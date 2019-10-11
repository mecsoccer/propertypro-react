import React from 'react';
import { fetchProperties } from '../../actions/index';
import { connect } from 'react-redux';
import Header from '../Header';
import Property from './Property';
import PropertyCreate from './PropertyCreate';
import PropertyDelete from './PropertyDelete';
import '../styling/Properties.css';
import '../styling/Main.css';
import '../styling/Form.css';
import '../styling/Responsive.css';
import { ReactComponent as AddButton } from '../img/Add.svg';
import PropertyEdit from './PropertyEdit';

class Properties extends React.Component {
  componentDidMount() {
    this.props.fetchProperties();
  }

  listenForModalClose = () => {
    const modal = document.getElementById('myModal');
    const allForms = document.querySelectorAll('.property-form');
    const modalCloseBtn = document.querySelectorAll('.modal-close-btn');
    
    modalCloseBtn.forEach((btn) => {
      btn.addEventListener('click', () => {
        modal.style.display = 'none';
        allForms.forEach((form) => {
          form.style.display = 'none';
        });
      });
    });
  }

  showCreatePropertyForm = () => {
    const modal = document.getElementById('myModal');
    const addPropertyForm = document.querySelector('.add-property-form');

    modal.style.display = 'block';
    addPropertyForm.style.display = 'block';
    this.listenForModalClose();
  }

  renderAddButton() {
    if (sessionStorage.getItem('token')) {
      return <AddButton onClick={this.showCreatePropertyForm} />;
    }
  }

  renderProperties() {
    return (
      <>
      <div className="page-container">
        <Header />
        <div className="page-main">
            <div className="filter-section">
                <label className="left filter">Filter</label>
                <select className="property-type fivecol">
                    <option>All</option>
                    <option>Self contained</option>
                    <option>2 bedroom flat</option>
                    <option>3 bedroom flat</option>
                    <option>Duplex</option>
                </select>
                <span className="add-property-btn fit right pointer" title="add new property">
                  {this.renderAddButton()}
                </span>
            </div>
            <section className="properties">
              {this.props.properties.map(prop => 
                <Property detail={prop} listenForModalClose={this.listenForModalClose} key={prop.id} />
              )}
            </section>
            <div className="pagination align-center">
                <button>Previous</button>
                <span>{this.props.properties.length} of {this.props.properties.length} showing</span>
                <button>Next</button>
            </div>
        </div>
        <div className="footer accent-bg-1">
            <p className="white-text align-center">© PropertyPro-lite, 2019</p>
        </div>
    </div>

    <div id="myModal" className="form-modal">
        <PropertyCreate />
        <PropertyEdit />
        <PropertyDelete />
    </div>
    </>
    );
  }

  render() {
    return (
      <div>{this.renderProperties()}</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { auth: state.auth, properties: state.properties.properties };
}

export default connect(mapStateToProps, { fetchProperties })(Properties);
