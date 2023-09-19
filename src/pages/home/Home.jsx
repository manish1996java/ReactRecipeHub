import ProductCard from "../../components/product-card/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/reducers/cart-reducer.js";
import FilterInput from "./filter-input/FilterInput";
import AppBreadcrumb from "../../components/appbreadcrumb/AppBreadcrumb";
import { addLike } from "../../store/reducers/liked-reducer";
import "./Home.css";
import { Avatar, Button, Card, Space, Typography } from "antd";
import Meta from "antd/es/card/Meta";

const { Title, Text } = Typography;

const Home = () => {
  return (
    <div className="app-container">
      <div className="home-page">
        <div className="main-banner">
          <div className="banner-content">
            <Title level={1} className="banner-heading">
              Let's Start Cooking With Popular Recipes
            </Title>
            <div className="banner-subtext">
              <div>
                <Text type="secondary">
                  Want to learn cook but confused how to start?
                </Text>
              </div>
              <div>
                <Text type="secondary"> No need to worry again!</Text>
              </div>
            </div>

            <div className="button-group">
              <Space>
                <Button type="primary">Get Started</Button>
                <Button>Explore Menu</Button>
              </Space>
            </div>
          </div>
          <div className="banner-image">
            <img src="https://dragonflyfoods.com/wp-content/uploads/2020/03/wrap.png" />
            <div className="dummy-card-1">
              <Card hoverable style={{width:"15rem"}}>
                <Meta
                  avatar={
                    <Avatar src="https://files.yappe.in/place/small/the-burger-company-4543479.webp" />
                  }
                  title="Card title"
                  description="Bread, Strawberry, Jam, Blueberry, Orange, Raspberry"
                />
              </Card>
            </div>
            <div className="dummy-card-2">
              <Card hoverable style={{width:"15rem"}}>
                <Meta
                  avatar={
                    <Avatar src="https://files.yappe.in/place/small/the-burger-company-4543479.webp" />
                  }
                  title="Card title"
                  description="Bread, Strawberry, Jam, Blueberry, Orange, Raspberry"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
