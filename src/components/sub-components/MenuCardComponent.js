import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

function MenuCardComponent({ menu }) {
  return (
    <Col md={4} className="mb-3">
      <Card className="shadow">
        <Card.Img
          variant="top"
          src={`/assets/images/${menu.category.nama.toLowerCase()}/${
            menu.gambar
          }`}
        />
        <Card.Body>
          <Card.Title>{menu.nama}</Card.Title>
          <Card.Text>{menu.harga}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MenuCardComponent;
