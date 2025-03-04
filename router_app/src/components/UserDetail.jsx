import { useParams, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { FaEnvelope, FaUser, FaBirthdayCake, FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";

const users = [
  { id: 1, name: "Nguyễn Văn A", age: 25, email: "a@example.com", address: "Hà Nội, Việt Nam", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
  { id: 2, name: "Trần Thị B", age: 30, email: "b@example.com", address: "TP. Hồ Chí Minh, Việt Nam", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
  { id: 3, name: "Lê Văn C", age: 28, email: "c@example.com", address: "Đà Nẵng, Việt Nam", avatar: "https://randomuser.me/api/portraits/men/3.jpg" }
];

function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <h2 className="text-danger text-center mt-5">⚠ Người dùng không tồn tại</h2>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
      <Card className="shadow-lg p-4 rounded-4" style={{ width: "400px", backgroundColor: "white" }}>
        <Card.Img variant="top" src={user.avatar} className="rounded-circle mx-auto d-block border shadow" style={{ width: "130px" }} />
        <Card.Body className="text-center">
          <Card.Title className="fs-3 fw-bold text-primary">
            <FaUser className="me-2" /> {user.name}
          </Card.Title>
          <Card.Text className="fs-5 text-muted">
            <FaBirthdayCake className="me-2 text-danger" /> <strong>Tuổi:</strong> {user.age}
          </Card.Text>
          <Card.Text className="fs-6">
            <FaEnvelope className="me-2 text-primary" /> <strong>Email:</strong> {user.email}
          </Card.Text>
          <Card.Text className="fs-6">
            <FaMapMarkerAlt className="me-2 text-success" /> <strong>Địa chỉ:</strong> {user.address}
          </Card.Text>
          <Link to="/" className="btn btn-outline-primary mt-3">
            <FaArrowLeft className="me-2" /> Quay lại
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserDetail;
