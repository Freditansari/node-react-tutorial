import React from "react";

export default props => {
  return (
    <div>
      <h1 className="display-4"> About COntact Manager</h1>
      <p className="lead">Simple app to manage contacts</p>
      {/* how to access parameters in url ( look in app.js for how to define it) */}
      <p className="lead">{props.match.params.example}</p>
      <p className="text-secondary">version 1.0.0</p>
    </div>
  );
};
