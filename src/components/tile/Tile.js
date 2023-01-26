import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      {props.contact.map((value, index) => {
        if (index === 0) {
          return <p className="tile-tile" key={index}>{value}</p>;
        } else {
          return <p className="tile" key={index}>{value}</p>;
        }
      }
      )}
    </div>
  );
};
