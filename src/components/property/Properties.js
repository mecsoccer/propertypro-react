import React from 'react';
import {
  fetchProperties,
  showFormModal,
  closeFormModal,
  updatePropertyQuery,
  fetchMoreProperties,
  fetchLessProperties,
} from '../../actions';
import { connect } from 'react-redux';
import PropertyCard from './PropertyCard';
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

  renderAddButton() {
    if (sessionStorage.getItem('token')) {
      return <AddButton onClick={this.showCreatePropertyForm} />;
    }
  }

  addCommaToDigit = (amount) => {
    if (amount.length < 4) return amount;
    let money = '', i = amount.length % 3 - 1;
    amount.split('').forEach((digit, idx) => {
      money = money + digit;
      if (idx === i && idx !== amount.length - 1) {
        money += ',';
        i += 3;
      };
    });
    return money;
  }

  fetchNextProperties = (e) => {
    this.props.fetchMoreProperties(this.pageSize);
  }

  fetchPrevProperties = (e) => {
    this.props.fetchLessProperties(this.pageSize);
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
            <PropertyCard detail={prop} key={prop.id} />
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
                  className={this.props.start ? "disabled" : "pointer"}
                  onClick={this.fetchPrevProperties}
                >
                  {'<< Previous'}
                </button>
                <span>Page {this.props.counter / this.pageSize + 1}</span>
                <button
                  className={this.props.end ? "disabled" : "pointer"}
                  onClick={this.fetchNextProperties}
                >
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
    propertyQuery: state.properties.query,
    counter: state.properties.counter,
    start: state.properties.start,
    end: state.properties.end,
  };
}

export default connect(
  mapStateToProps,
  {
    fetchProperties,
    showFormModal,
    closeFormModal,
    updatePropertyQuery,
    fetchMoreProperties,
    fetchLessProperties,
  }
)(Properties);
