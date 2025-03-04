import { useState } from "react";
import ListCard from "./components/ListCard";
// import AddContactModal from "./components/AddContactModal";
import contactsData from "./data/contacts";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [contacts, setContacts] = useState(contactsData);
  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  return (
    <div className="container mt-4">
      
      <ListCard contacts={contacts} onDelete={handleDelete} />
      <div className="d-flex justify-content-between mb-3">
        <button className="btn btn-danger" onClick={() => setContacts([])} disabled={!contacts.length}>
          Xóa Tất Cả
        </button>
      </div>
    
    </div>
  );
};

export default App;
