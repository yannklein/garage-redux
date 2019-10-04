import React from 'react';
import { Link } from 'react-router-dom';

export default class LeftMenu extends React.Component {
  render() {
    const imgStyle = "background-image: linear-gradient(rgba(0, 0, 100, 0.2), rgba(100, 0, 0, 0.4)), url('https://s3-ap-southeast-1.amazonaws.com/tsingapore/FileStorage/Article/Photo/Legacy/Culture_vindiesel2.jpg')";
    return (
      <div className="left-menu">
        <div className="garage-image" style={{ imgStyle }}>
          <div className="garage-logo">
            <Link className="btn btn-cta" to="/">
              <img src="https://i.pinimg.com/originals/c5/40/57/c540575dde6d1ae57cb3cfa836812de8.jpg" alt="" />
            </Link>
          </div>
        </div>
        <div className="garage-info">
          <h3 className="text-center">Yann's squat</h3>
          <div className="garage-description">
            Wanna have a new car? Do you want the best car ever ever?? Add it to you Yann's garage!
          </div>
          <div className="text-center">
            <Link className="btn btn-cta" to="/car/new">
              Add a Car
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
