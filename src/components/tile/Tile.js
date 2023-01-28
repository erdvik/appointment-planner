import React from "react";

export const Tile = (props) => {
  const contactEntries = Object.entries(props.contact);
  return (
    <div className="tile-container">
      {contactEntries.map(([key, value], index) => {
        if (index === 0) {
          return <p className="tile-tile" key={key}>{key}: {value}</p>;
        } else {
          return <p className="tile" key={key}>{key}: {value}</p>;
        }
      }
      )}
    </div>
  );
};