import { Link } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const users = [
  { id: 1, name: "Nguyễn Văn A" },
  { id: 2, name: "Trần Thị B" },
  { id: 3, name: "Lê Văn C" }
];

function UserList() {
  return (
    <Card className="mt-4 shadow-lg rounded-4 border-0" style={{ backgroundColor: "#f8f9fa" }}>
      <Card.Header className="bg-success text-white text-center fw-bold fs-5">📋 DANH SÁCH NGƯỜI DÙNG</Card.Header>
      <ListGroup variant="flush">
        {users.map((user) => (
          <ListGroup.Item 
            key={user.id} 
            className="d-flex align-items-center gap-3 py-3 px-4 border-0"
            style={{ transition: "0.3s", cursor: "pointer" }}
          >
            <FaUser className="text-primary fs-4" />
            <Link to={`/user/${user.id}`} className="text-decoration-none text-dark fw-semibold fs-5">
              {user.name}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default UserList;
