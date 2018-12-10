import React from "react";
import PropTypes from "prop-types";
// import "./contact.css";
//using link
import { Link } from "react-router-dom";

const Header = props => {
  return (
    // <div>
    //   {/* <h1 style={{ color: "red", fontSize: "50 px" }}>{props.branding}</h1> */}
    //   <h1>{props.branding}</h1>
    // </div>
    <nav className="navbar navbar-expand-sm navbar-light bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" />
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" /> about
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

//error check of prop type
Header.propTypes = {
  //   branding: PropTypes.object.isRequired
  branding: PropTypes.string.isRequired
};
export default Header;
