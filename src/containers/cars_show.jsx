import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Car from './car';
import { getCar } from '../actions';

class CarsShow extends React.Component {
  componentWillMount() {
    if (!this.props.car) {
      this.props.getCar(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }
    return (
      <div className="car-show">
        <Car key={this.props.car.id} car={this.props.car} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCar }, dispatch);
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  const car = state.cars.find(p => p.id === idFromUrl);
  return {
    car
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
