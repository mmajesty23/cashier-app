import React, { Component } from "react";
import ListCategoryComponent from "../components/ListCategoryComponent.js";
import OrderSummaryComponent from "../components/OrderSummaryComponent.js";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constant.js";
import ListMenuComponent from "../components/ListMenuComponent.js";
import Swal from "sweetalert2";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      choosenCategory: "Makanan",
      carts: [],
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

    try {
      axios
        .get(`${API_URL}keranjangs`)
        .then((res) => this.setState({ carts: res.data }));
    } catch (error) {
      console.log(error.message);
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.carts !== prevState.carts) {
      try {
        axios
          .get(`${API_URL}keranjangs`)
          .then((res) => this.setState({ carts: res.data }));
      } catch (error) {
        console.log(error.message);
      }
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

  addToCart = (order) => {
    axios.get(`${API_URL}keranjangs?product.id=${order.id}`).then((res) => {
      if (res.data.length === 0) {
        const carts = {
          orderAmmount: 1,
          totalPrice: order.harga,
          product: order,
        };
        axios.post(`${API_URL}keranjangs`, carts).then((res) =>
          Swal.fire({
            title: "Order Received!",
            text: `${res.data.product.nama} added to cart!`,
            icon: "success",
          })
        );
      } else {
        const carts = {
          orderAmmount: res.data[0].orderAmmount + 1,
          totalPrice: res.data[0].totalPrice + order.harga,
          product: order,
        };
        axios.put(`${API_URL}keranjangs/${res.data[0].id}`, carts).then((res) =>
          Swal.fire({
            title: "Order Received!",
            text: `${res.data.product.nama} added to cart!`,
            icon: "success",
          })
        );
      }
    });
  };

  render() {
    const { menus, choosenCategory, carts } = this.state;

    return (
      <>
        <Container fluid className="mt-3">
          <Row>
            <ListCategoryComponent
              changeChoosenCategory={this.changeChoosenCategory}
              choosenCategory={choosenCategory}
            />

            <ListMenuComponent menus={menus} addToCart={this.addToCart} />
            <OrderSummaryComponent carts={carts} />
          </Row>
        </Container>
      </>
    );
  }
}
