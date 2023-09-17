import { Avatar, List } from 'antd';
import React from 'react';

const ProductList = ({products,onSelectCard}) => {
    return (
        <div>
        <h2> prduct list</h2>
        <List
          itemLayout="horizontal"
          dataSource={products}
          renderItem={(item, index) => (
            <List.Item onClick={()=>onSelectCard(index)}>
              <List.Item.Meta
                avatar={<Avatar src={item.img} />}
                title={
                  <span>
                    {item.title} ${item.price}
                  </span>
                }
                description={item.caption}
              />
            </List.Item>
          )}
        />
      </div>
    );
};

export default ProductList;