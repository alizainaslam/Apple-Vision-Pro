import React from "react";

const Button = ({ btnText, style }) => {
  return (
    <div className="cursor-pointer">
      <button className={style}>{btnText}</button>
    </div>
  );
};

export default Button;
