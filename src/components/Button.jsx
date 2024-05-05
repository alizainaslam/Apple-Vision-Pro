import React from "react";

const Button = ({ btnText, style, onClick }) => {
  return (
    <div className="cursor-pointer">
      <button className={style} onClick={onClick}>
        {btnText}
      </button>
    </div>
  );
};

export default Button;
