import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Card className="text-center shadow-lg p-4 border-0" style={{ maxWidth: "400px" }}>
        <FaExclamationTriangle className="text-danger" size={50} />
        <Card.Body>
          <Card.Title className="text-danger fs-3 fw-bold">404 - Không tìm thấy trang!</Card.Title>
          <Card.Text className="text-muted">
            Xin lỗi, trang bạn tìm kiếm không tồn tại hoặc đã bị xóa.
          </Card.Text>
          <Button as={Link} to="/" variant="primary" className="mt-3">
            Quay lại trang chủ
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default NotFound;
