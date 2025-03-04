import Card from "./Card";

const ListCard = (props) => {
  return (
    <div className="card-container">
      {props.contacts.length > 0 ? (
        props.contacts.map((contact) => (
          <Card
            key={contact.id}
            {...contact} // Truyền toàn bộ dữ liệu của contact vào Card
            onDelete={() => props.onDelete(contact.id)} 
          />
        ))
      ) : (
        <p className="text-muted">Không có liên hệ nào.</p>
      )}
    </div>
  );
};

export default ListCard;
