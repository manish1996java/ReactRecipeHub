import { Col, Divider, Row } from 'antd';
import CartListItem from '../cart-list-item/CartListItem';
import './CartList.css';


const CartList  = ({ carts = [], quantityControllerHandler, removeProdCart }) => {
  console.log('carts',carts);
  return (
    <div className="cart-list" style={{padding:"1rem"}}>
      <Row>
        <Col span={8}><h2>Shopping Carts</h2></Col>
      </Row>
      
      <Divider />
      {/* <div style={{maxHeight:"300px",overflowY:"scroll",}}> */}
        {carts.map((c,i) => (
          <CartListItem
            cart={c}
            key={i}
            quantityControllerHandler={quantityControllerHandler}
            removeProdCart={removeProdCart}
          />
        ))}
      {/* </div> */}
    </div>
  );
};

export default CartList;