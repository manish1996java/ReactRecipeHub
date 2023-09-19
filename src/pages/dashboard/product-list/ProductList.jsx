import {
  DeleteOutlined,
  DownOutlined,
  EditOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Dropdown,
  Image,
  List,
  Modal,
  Select,
  Space,
  Table,
} from "antd";
import React, { useState } from "react";



const ProductList = ({ products, onSelectCard, onDeleteProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function showModal(){
    console.log("showModal");
    setIsModalOpen(true);
  }

  function handleOk(){
    console.log("handle Ok");
    setIsModalOpen(false);
  }

  function handleCancel(){
    console.log("handle Cancel");
    setIsModalOpen(false);
  }


  const items = [
    {
      key: "1",
      label: (
        <a>
          <span>
            <EditOutlined  /> Edit
          </span>
          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <>
          <DeleteOutlined onClick={()=>console.log('delete')} /> Delete
        </>
      ),
    },
  ];


  const onMenuClick = (key,record) => {
    console.log("key",typeof key);
    const parsedKey = parseInt(key);
    console.log("parsedKey",parsedKey);
    if(parsedKey == 1){
      console.log("edit");
      showModal();
    }else if(parsedKey){
      console.log("delete");
      onDeleteProduct(record);
    }
  }

  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (img) => (
        <div>
          {/* {imgs.map((img, index) => ( */}
          <Image src={img} width={50} />
          {/* ))} */}
        </div>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Caption",
      dataIndex: "caption",
      key: "caption",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Dropdown menu={{ items, onClick: ({key}) => onMenuClick(key,record) }} >
            <a onClick={(e) => e.preventDefault()}>
              <MoreOutlined />
            </a>
          </Dropdown>
        </>
      ),
    },
  ];

  const clickHandler = (record, i) => {
    console.log("record", record, "index", i);
    onSelectCard(i);
  };

  return (
    <div>
      <div style={{display:"flex"}}>

      <h2> product list</h2>
      <div style={{flex:"1 1"}}></div>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={() => {}}
        options={[
          { value: "jack", label: "A-Z" },
          { value: "lucy", label: "Z-A" },
        ]}
      />
      </div>
      <Table
        // onRow={(record, i) => ({ onClick: () => clickHandler(record, i) })}
        columns={columns}
        dataSource={products}
      ></Table>
      {/* <List
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
        /> */}
    </div>
  );
};

export default ProductList;
