import UserList from "../components/UserList";
import { Container, Card } from "react-bootstrap";

function Home() {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="shadow-lg p-4 rounded-4" style={{ width: "500px", backgroundColor: "#f8f9fa" }}>
        <h1 className="text-primary fw-bold text-center mb-3">📋 Danh Sách</h1>
        <UserList />
      </Card>
    </Container>
  );
}

export default Home;
