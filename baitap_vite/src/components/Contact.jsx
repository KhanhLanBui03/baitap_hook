
const Contact = ({ contact, onDelete }) => {
  return (
    <div className="card p-3 m-2 shadow-sm" style={{ width: "18rem" }}>
      <h5 className="fw-bold">{contact.name}</h5>
      <p className="text-muted">{contact.surname}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Address:</strong> {contact.address}</p>
      <button className="btn btn-danger" onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;
