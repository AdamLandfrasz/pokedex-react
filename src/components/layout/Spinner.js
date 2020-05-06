import React from "react";
import Loader from "react-loader-spinner";

function Spinner() {
  return (
    <Loader
      type="TailSpin"
      color="#FF3838"
      height={50}
      width={50}
      style={{ textAlign: "center", margin: "1.5rem auto 0.6rem" }}
    />
  );
}

export default Spinner;
