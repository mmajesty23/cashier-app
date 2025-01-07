import React, { Component } from "react";
import { Col, Row, Card } from "react-bootstrap";

function formatNumberWithDots(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default class ListMenuComponent extends Component {
  render() {
    const { menus } = this.props;

    return (
      <Col>
        <h3>List Menu</h3>
        <hr />
        <Row>
          {menus &&
            menus.map((menu) => {
              return (
                <Col md={4} className="mb-3" key={menu.id}>
                  <Card className="shadow">
                    <Card.Img
                      variant="top"
                      src={`/assets/images/${menu.category.nama.toLowerCase()}/${
                        menu.gambar
                      }`}
                    />
                    <Card.Body>
                      <Card.Title>{menu.nama}</Card.Title>
                      <Card.Text>{formatNumberWithDots(menu.harga)}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Col>
    );
  }
}
