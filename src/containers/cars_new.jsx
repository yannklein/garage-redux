import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';


class CarsNew extends React.Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garageName, values, (post) => {
      this.props.history.push('/'); // Navigate after submit
      return post;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <div className="car-new">
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field label="Brand" name="brand" type="text" component={this.renderField} />
          <Field label="Model" name="model" type="text" component={this.renderField} />
          <Field label="Owner" name="owner" type="text" component={this.renderField} />
          <Field label="Plate" name="plate" type="text" component={this.renderField} />
          <button className="btn btn-primary" type="submit" disabled={this.props.pristine || this.props.submitting} >
            Create Car
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garageName: state.garageName
  };
}

export default reduxForm({ form: 'newPostForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
