import React, { useState, useEffect } from "react";

const MobilePegination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-primary" onClick={() => onButtonClick("prev")}>
        Previous
      </button>
      &nbsp;&nbsp;
      <button className="btn btn-primary" onClick={() => onButtonClick("next")}>
        Next
      </button>
    </div>
  );
};

export default MobilePegination;