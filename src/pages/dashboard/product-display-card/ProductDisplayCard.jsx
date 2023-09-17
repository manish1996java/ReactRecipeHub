import React from "react";
import { Avatar, Card } from "antd";
import Meta from "antd/es/card/Meta";
import {EditOutlined} from '@ant-design/icons';

const ProductDisplayCard = ({product,onEditProduct}) => {
  return (
    <div>
      <div className="product-display">
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt={product.img}
              src={product.img}
            />
          }
          actions={[
            <EditOutlined key="edit" onClick={onEditProduct} />,
          ]}
        >
          <Meta

            title={product.title}
            description={product.caption}
          />
          <h2>${product.price}</h2>
          
        </Card>
      </div>
    </div>
  );
};

export default ProductDisplayCard;
