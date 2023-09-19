import { Link, useNavigate } from "react-router-dom";
import { Card, Button, Typography, Divider } from "antd";
import { HeartFilled, HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import AppBreadcrumb from "../appbreadcrumb/AppBreadcrumb";
import uniqid from "uniqid";

const { Meta } = Card;

const { Title, Text } = Typography;

const ProductCard = ({
  id,
  caption,
  title,
  img,
  price,
  index,
  quantity,
  likes,
  addToCartHandler,
  onLikedProduct
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
        style={{ width: 300,cursor:"auto" }}
        cover={<img style={{cursor:"pointer"}} onClick={()=>navigate(`/food/${index}`)} alt="example" src={img} />}
      >
        <Text type="secondary">{caption}</Text>
        <Meta
          title={title.toUpperCase()}
          description="aasdfsdajf ajdflas jdfl;sdaj fl;asjfljlsjdflks "
        />
        {/* <p>quantity {quantity}</p> */}
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
              icon={ likes.includes(id) ? <HeartFilled /> :<HeartOutlined />}
              onClick={onLikedProduct}
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
