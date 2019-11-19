import React from 'react';
import {
  fetchProperties,
  showFormModal,
  closeFormModal,
  updatePropertyQuery,
  updatePagePosition,
} from '../../actions';
import { connect } from 'react-redux';
import Property from './Property';
import FormModal from '../FormModal';
import PropertyCreate from './PropertyCreate';
import '../styling/Properties.css';
import '../styling/Main.css';
import '../styling/Form.css';
import '../styling/Responsive.css';
import { ReactComponent as AddButton } from '../img/Add.svg';
import Navigation from '../Navigation';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.pageSize = 12;
  }

  componentDidMount() {
    this.props.fetchProperties(this.pageSize, 0);
    this.props.closeFormModal();
  }

  showCreatePropertyForm = (e) => {
    this.props.showFormModal(<PropertyCreate />);
  }

  updateQuery = (name, init) => {
    return (e) => {
      const query = this.props.propertyQuery;
      query[name] = e.target.value.toLowerCase();
      if (e.target.value.toLowerCase() === init) query[name] = '';

      this.props.updatePropertyQuery(query);
      this.props.fetchProperties(this.pageSize, 0, query.state, query.type);
      };
  }

  updatePagination = (operation) => {
    return (e) => {
      const next = operation === 'next' ? this.pageSize : -this.pageSize;
      this.props.updatePagePosition(this.props.counter + next);
      const {state, type } = this.props.propertyQuery;

      this.props.fetchProperties(this.pageSize, this.props.counter, state, type);
    };
  }

  renderAddButton() {
    if (sessionStorage.getItem('token')) {
      return <AddButton onClick={this.showCreatePropertyForm} />;
    }
  }

  renderProperties() {
    if (!this.props.properties.length) {
      return (
        <section className="mh">
          <div className="loader"></div>
        </section>
      )
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
        <Navigation />
        <div className="page-main">
            <div className="filter-section">
                <div>
                  <select id="state-filter" className="property-type" onChange={this.updateQuery('state', 'select state')}>
                    <option>Select state</option>
                    <option>Abia</option>
                    <option>imo</option>
                    <option>Lagos</option>
                    <option>Ogun</option>
                  </select>
                  <select id="type-filter" className="property-type" onChange={this.updateQuery('type', 'select type')}>
                    <option>Select type</option>
                    <option>Self contained</option>
                    <option>2 bedroom</option>
                    <option>3 bedroom</option>
                    <option>Duplex</option>
                  </select>
                </div>
                <span className="add-property-btn fit right pointer" title="add new property">
                  {this.renderAddButton()}
                </span>
            </div>
              {this.renderProperties()}
            <div className="pagination align-center">
                <button
                  className={this.props.counter ? 'pointer' : 'disabled'}
                  onClick={this.updatePagination('previous')}
                >
                  {'<< Previous'}
                </button>
                <span>{this.props.properties.length} showing</span>
                <button className="pointer" onClick={this.updatePagination('next')}>
                  Next >>
                </button>
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
  return {
    auth: state.auth,
    properties: state.properties.properties,
    counter: state.properties.counter,
    propertyQuery: state.properties.query
  };
}

export default connect(
  mapStateToProps,
  {
    fetchProperties,
    showFormModal,
    closeFormModal,
    updatePropertyQuery,
    updatePagePosition,
  }
)(Properties);
