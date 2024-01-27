import React from "react";

const index = ({ children, style }) => {
  return <div className={`${style} min-h-screen w-full `}>{children}</div>;
};

export default index;
