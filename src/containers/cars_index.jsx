import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Car from './car';
import { getCars } from '../actions';

class CarsIndex extends React.Component {
  componentWillMount() {
    this.props.getCars(this.props.garageName);
  }

  render() {
    return (
      <div className="car-index">
        {this.props.cars.map((car) => {
          return (
            <Link className="btn btn-cta" to={`/car/${car.id}`} key={car.id}>
              <Car key={car.id} car={car} />
            </Link>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garageName: state.garageName
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
