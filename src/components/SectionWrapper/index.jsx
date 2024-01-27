import React from "react";

const index = ({ children, style, info = {} }) => {
  return (
    <div className={`${style} min-h-screen w-full `} {...info}>
      {children}
    </div>
  );
};

export default index;
