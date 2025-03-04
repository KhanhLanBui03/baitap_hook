
import ContactList from "./ContactList";
import { INITIAL_CONTACTS } from "../data/contacts";

const App = () => {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);

  // Hàm xóa 1 liên hệ
  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  // Hàm xóa tất cả liên hệ
  const handleDeleteAll = () => {
    setContacts([]);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact List</h2>
      <ContactList contacts={contacts} onDelete={handleDelete} onDeleteAll={handleDeleteAll} />
    </div>
  );
};

export default App;
