import React from "react";

const Entrada = ({ label, type, value, onChange, placeholder, name }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        required
      />
    </div>
  );
};

export default Entrada;
