import React from "react";

const List = ({ listItems, onClick }) => {
  return (
    <>
      <ul className="flex gap-4 text-optionalColor">
        {listItems.map((item, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => onClick(index)}
                title="navbar btn"
                className="cursor-pointer"
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
