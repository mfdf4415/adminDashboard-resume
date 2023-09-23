import React from "react";

const Spinner = () => {
  return (
    <div className="w-full h flex items-center justify-center">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-7 w-7"></div>
    </div>
  );
};

export default Spinner;
