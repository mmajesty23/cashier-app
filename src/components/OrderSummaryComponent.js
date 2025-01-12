import React, { Component } from "react";
import { Col, Row, Badge, ListGroup } from "react-bootstrap";
import formatNumberWithDots from "../utils/helperFunction";

export default class OrderSummaryComponent extends Component {
  render() {
    const { carts } = this.props;

    return (
      <Col md={3}>
        <h3>Order Summary</h3>
        <hr />

        <ListGroup variant="flush">
          {carts &&
            carts.map((item) => {
              return (
                <ListGroup.Item>
                  <Row>
                    <Col xs={2}>
                      <Badge pill bg="primary">
                        {item.orderAmmount}
                      </Badge>
                    </Col>
                    <Col>
                      <h5>{item.product.nama}</h5>
                    </Col>
                    <Col xs={4}>Rp {formatNumberWithDots(item.totalPrice)}</Col>
                  </Row>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </Col>
    );
  }
}
