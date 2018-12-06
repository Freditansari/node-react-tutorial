import React from "react";
import PropTypes from "prop-types";
// import "./contact.css";

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
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                houses
              </a>
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
