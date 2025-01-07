import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent.js";
import ListCategoryComponent from "./components/ListCategoryComponent.js";
import OrderSummaryComponent from "./components/OrderSummaryComponent.js";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "./utils/constant.js";
import ListMenuComponent from "./components/ListMenuComponent.js";

export default class App extends Component {
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

  changeChoosenCategory = (categoryValue) => {
    this.setState({ choosenCategory: categoryValue, menus: [] });
    try {
      axios
        .get(`${API_URL}products?category.nama=${categoryValue}`)
        .then((res) => this.setState({ menus: res.data }));
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { menus, choosenCategory } = this.state;

    return (
      <>
        <NavbarComponent />
        <Container fluid className="mt-3">
          <Row>
            <ListCategoryComponent
              changeChoosenCategory={this.changeChoosenCategory}
              choosenCategory={choosenCategory}
            />

            <ListMenuComponent menus={menus} />
            <OrderSummaryComponent />
          </Row>
        </Container>
      </>
    );
  }
}
