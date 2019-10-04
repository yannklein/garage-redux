import React from 'react';

export default class Car extends React.Component {
  render() {
    const imgUrl = `https://loremflickr.com/200/200/${this.props.car.brand},${this.props.car.model}/all`;

    return (
      <div className="car">
        <img src={imgUrl} alt="a car" />
        <div className="car-info">
          <h2>{this.props.car.brand} - {this.props.car.model}</h2>
          <p>Owner: {this.props.car.owner}</p>
        </div>
      </div>
    );
  }
}
