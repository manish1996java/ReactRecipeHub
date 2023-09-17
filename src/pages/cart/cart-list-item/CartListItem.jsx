
import { Button, Input } from 'antd';
import { DeleteOutlined } from "@ant-design/icons";

const CartListItem  = ({cart,quantityControllerHandler,removeProdCart}) => {
    return (
        <div className="tileCard" key={cart.id}>
          <img src={cart.img} />
          <h4>{cart.title}</h4>
          <div className="space-box"></div>
          <h3>${cart.price}</h3>
          <div className="space-box"></div>
          <div className="increase-quantity" style={{ display: "flex" }}>
            <Button
              type="text"
              onClick={() => quantityControllerHandler(cart.id, "sub")}
              shape="circle"
            >
              -
            </Button>
            <Input
              style={{ width: "50px" }}
              type="number"
              value={cart.quantity}
              readOnly
            ></Input>
            <Button
              type="text"
              onClick={() => quantityControllerHandler(cart.id, "add")}
              shape="circle"
            >
              +
            </Button>
          </div>
          <div className="space-box"></div>
          <Button
            type="text"
            icon={<DeleteOutlined />}
            shape="circle"
            onClick={() => removeProdCart(cart)}
          ></Button>
        </div>
      );
};

export default CartListItem;