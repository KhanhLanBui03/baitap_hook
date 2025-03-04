import React from "react";
import Contact from "./Contact";

const ContactList = ({ contacts, onDelete, onDeleteAll }) => {
  return (
    <div className="container text-center">
      <div className="d-flex flex-wrap justify-content-center">
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
      </div>
      {contacts.length > 0 && (
        <button className="btn btn-danger mt-3" onClick={onDeleteAll}>Delete All</button>
      )}
    </div>
  );
};

export default ContactList;
