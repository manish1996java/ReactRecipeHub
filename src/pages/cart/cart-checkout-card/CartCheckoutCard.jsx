import React from "react";
import "./CartCheckoutCard.css";
import { Button, Col, Divider, Row } from "antd";

const CartCheckoutCard = ({ totalAmount, shippingAmount, totalItems, onPlaceOrder }) => {
  return (
    <div className="cart-checkout-box">
      <h2>Order Summery</h2>
      <Divider />
      <Row>
        <Col span={8}>Total Items {totalItems}</Col>
        <Col span={8} offset={8}>
          ${totalAmount}
        </Col>
      </Row>
      <Row>
        <Col span={8}>shipping Amount</Col>
        <Col span={8} offset={8}>
        ${shippingAmount}
        </Col>
      </Row>
    <Divider />
    <Row>
        <Col span={8}><h3>total Amount:</h3></Col>
        <Col span={8} offset={8}>
            <h3>
            ${totalAmount + shippingAmount}
            </h3>
        </Col>
      </Row>
      <Button onClick={onPlaceOrder} style={{marginTop:"2rem"}} type="primary" block>
        Place Order
      </Button>
    </div>
  );
};

export default CartCheckoutCard;
