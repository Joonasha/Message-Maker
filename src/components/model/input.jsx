import React from "react";

/**
 * Function for handling messages text input. User gives this in 'New Message' view.
 * @author Joonas Haikonen
 */
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
