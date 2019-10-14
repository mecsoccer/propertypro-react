import React from 'react';
import { fetchProperties, showFormModal, closeFormModal } from '../../actions';
import { connect } from 'react-redux';
import Header from '../Header';
import Property from './Property';
import FormModal from '../FormModal';
import PropertyCreate from './PropertyCreate';
import '../styling/Properties.css';
import '../styling/Main.css';
import '../styling/Form.css';
import '../styling/Responsive.css';
import { ReactComponent as AddButton } from '../img/Add.svg';

class Properties extends React.Component {
  componentDidMount() {
    this.props.fetchProperties();
    this.props.closeFormModal();
  }

  showCreatePropertyForm = (event) => {
    this.props.showFormModal(<PropertyCreate />);
  }

  renderAddButton() {
    if (sessionStorage.getItem('token')) {
      return <AddButton onClick={this.showCreatePropertyForm} />;
    }
  }

  renderProperties() {
    if (!this.props.properties.length) {
      return <div className="loader"></div>;
    }
    return (
      <section className="properties">
        {this.props.properties.map(prop =>
          <Property detail={prop} key={prop.id} />
        )}
      </section>
    );
  }

  render() {
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
              {this.renderProperties()}
            <div className="pagination align-center">
                <button>Previous</button>
                <span>{this.props.properties.length} of 1000 showing</span>
                <button>Next</button>
            </div>
        </div>
    </div>
    <div className="footer accent-bg-1">
        <p className="white-text align-center">© PropertyPro-lite, 2019</p>
    </div>

    <FormModal />
    </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { auth: state.auth, properties: state.properties.properties };
}

export default connect(
  mapStateToProps, { fetchProperties, showFormModal, closeFormModal }
)(Properties);
