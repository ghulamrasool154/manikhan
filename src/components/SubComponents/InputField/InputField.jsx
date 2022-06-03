import React from "react";

const InputField = (props) => {
  return (
    <>
      <input
        type={props.text}
        placeholder={props.place}
        className="form-control input-style rounded-0 text-start mb-2"
        name={props.name}
        value={props.value}
        onChange={props.pressed}
        required={true}
      />
    </>
  );
};

export default InputField;
