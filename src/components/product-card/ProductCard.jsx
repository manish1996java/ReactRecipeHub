import { Link, useNavigate } from "react-router-dom";
import { Card, Button, Typography, Divider } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import AppBreadcrumb from "../appbreadcrumb/AppBreadcrumb";

const { Meta } = Card;

const { Title, Text } = Typography;

const ProductCard = ({
  title,
  img,
  price,
  index,
  quantity,
  addToCartHandler,
}) => {

  const navigate = useNavigate();
  console.log(
    "title: " + title,
    "price",
    price,
    "img",
    img,
    index,
    "quantity",
    quantity
  );
  return (
    <>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={<img onClick={()=>navigate(`/food/${index}`)} alt="example" src={img} />}
      >
        <Text type="secondary">sub Title</Text>
        <Meta
          title={title}
          description="aasdfsdajf ajdflas jdfl;sdaj fl;asjfljlsjdflks "
        />
        <p>quantity {quantity}</p>
        {/* <p>Price: ${price}</p> */}
        <Divider />
        <div
          className="action"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <Title level={4}>${price}</Title>
          </div>
          <div>
            <Button
              type="text"
              icon={<HeartOutlined />}
              onClick={() => {}}
            ></Button>
            {quantity ? <Button
              type="text"
              icon={<ShoppingCartOutlined />}
              onClick={addToCartHandler}
            /> : ""}            
          </div>
        </div>
        {/* <Button
          disabled={!quantity ?? true}
          onClick={quantity ? addToCartHandler : ""}
          block
        >
          {" "}
          {quantity ? "Add to Cart" : "Out of stock"}{" "}
        </Button> */}
      </Card>
    </>
  );
};

export default ProductCard;
