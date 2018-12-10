import React from "react";

export default () => {
  return (
    <div>
      <h1 className="display-4">
        <span className="text-danger">404</span> Page not Found
      </h1>
      <p className="lead">Sorry that page does not exist</p>
      <img
        src={require("./confused-pug.jpg")}
        className="img-responsive rounded rounded-circle"
        alt="could not found the page you're looking for"
        width="800"
        height="500"
      />
    </div>
  );
};
