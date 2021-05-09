import { Spin } from "antd";
import React from "react";

const Loader = () => {
  return (
    <div style={{ margin: 50, textAlign: "center" }}>
      <Spin />
    </div>
  );
};

export default Loader;
