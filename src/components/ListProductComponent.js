import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../utils/constant";
import { Col, Row, Card } from "react-bootstrap";

export default class ListProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      choosenCategory: "Makanan",
    };
  }

  componentDidMount() {
    try {
      axios
        .get(`${API_URL}products?category.nama=${this.state.choosenCategory}`)
        .then((res) => this.setState({ menus: res.data }));
    } catch (error) {
      console.log(error.message);
    }
  }

  changeChoosenCategory(value) {
    this.setState({
      choosenCategory: value,
      menus: [],
    });
  }

  render() {
    const { menus } = this.state;
    return (
      <Col>
        <h3>List Menu</h3>
        <hr />
        <Row>
          {menus &&
            menus.map((menu) => {
              return (
                <>
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
                </>
              );
            })}
        </Row>
      </Col>
    );
  }
}
