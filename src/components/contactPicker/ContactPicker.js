import React from "react";

export const ContactPicker = (props) => {
  const { contacts, onChange } = props;
  return (
    <select onChange={onChange}>
      <option value="">No Contact Selected</option>
      {contacts ? contacts.map((contact) => (
        <option key={contact.name} value={contact.name}>
          {contact.name}
        </option>
      )): <option key={1} value={"test name"}>
      {"test name"}
    </option>}
    </select>
  );
};
