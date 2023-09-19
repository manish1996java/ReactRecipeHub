// import { useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  cartQuantityControl,
} from "../../store/reducers/cart-reducer";
import { Button, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import CartList from "./cart-list/CartList";
import CartCheckoutCard from "./cart-checkout-card/CartCheckoutCard";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  // const [quantity,setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { carts, totalAmount, shippingAmount, isAuth } = useSelector((state) => {
    console.log("cartList", state);
    return {...state.cartReducer,...state.authReducer};
  });

  


  const removeProdCart = (id) => {
    console.log("removeFormCart", id);
    dispatch(removeFromCart(id));
  };

  const quantityControllerHandler = (id, operation) => {
    console.log("id",id);
    dispatch(cartQuantityControl({ id, operation }));
  };

  const currentConverter = (value, locales = "IND", currency = "INR") => {
    return new Intl.NumberFormat(locales, {
      style: "currency",
      currency: currency,
    }).format(value);
  };

  const onPlaceOrder = ()=>{
    console.log("isAuth",isAuth);
    if(isAuth){
      alert("order placed successfully");
    }else{
      navigate('/auth/');
      alert("please Sign in first");
    }
  }

  return (
    <div className="page-padding">
      <div className="app-container">
        <h2>Cart</h2>
        <div className="cart-wrapper">
          {/* <div className="cart-list">{carts.map((c) => tileCard(c))}</div> */}
          <CartList carts={carts} quantityControllerHandler={quantityControllerHandler} removeProdCart={removeProdCart}/>
          <CartCheckoutCard totalAmount={totalAmount} shippingAmount={shippingAmount} totalItems={carts.length} onPlaceOrder={onPlaceOrder} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
