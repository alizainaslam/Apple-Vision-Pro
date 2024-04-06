import React from "react";

const List = ({ listItems }) => {
  return (
    <>
      <ul className="flex gap-4 text-optionalColor">
        {listItems.map((item, index) => {
          return (
            <li key={index}>
              <button className="cursor-pointer">{item}</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
