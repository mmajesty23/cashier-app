import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../utils/constant";
import { Col, Row } from "react-bootstrap";
import MenuCardComponent from "./sub-components/MenuCardComponent";

export default class ListProductComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
    };
  }

  componentDidMount() {
    try {
      axios
        .get(`${API_URL}products`)
        .then((res) => this.setState({ menus: res.data }));
    } catch (error) {
      console.log(error.message);
    }
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
                  <MenuCardComponent key={menu.id} menu={menu} />
                </>
              );
            })}
        </Row>
      </Col>
    );
  }
}
