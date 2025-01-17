import React, { Component } from "react";
import { Col, Row, Badge, ListGroup } from "react-bootstrap";
import formatNumberWithDots from "../utils/helperFunction";
import PurchaseComponent from "./PurchaseComponent";
import { API_URL } from "../utils/constant";
import axios from "axios";

export default class OrderSummaryComponent extends Component {
  calcTotalPrice = (item) => {
    return item.reduce((accumulator, current) => {
      return accumulator + current.totalPrice;
    }, 0);
  };

  purchase = (carts) => {
    const totalPayment = {
      total_paid: this.calcTotalPrice(carts),
      menus: carts,
    };

    axios.post(`${API_URL}pesanans`, totalPayment);
  };

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
                <ListGroup.Item key={item.id}>
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

        <PurchaseComponent
          carts={carts}
          purchaseCallback={this.purchase}
          calcTotalPriceMethod={this.calcTotalPrice}
        />
      </Col>
    );
  }
}
