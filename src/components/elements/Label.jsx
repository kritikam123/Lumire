import React from "react";

const FormLabel = ({ htmlFor, label, required = false }) => {
  return (
    <label htmlFor={htmlFor} className="text-sm font-normal text-black">
      {label}
      {required ? (
        <span className="text-red-600 text-md font-bold">{" *"}</span>
      ) : (
        ""
      )}
    </label>
  );
};
