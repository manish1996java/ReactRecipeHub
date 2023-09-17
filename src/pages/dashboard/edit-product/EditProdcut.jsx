import { Button, Card, InputNumber } from 'antd';
import React from 'react';
import { Form } from 'react-router-dom';

const EditProdcut = () => {
    
        return (
            <div>
              {/* <div className="addProduct">
                <Card style={{width:"300px"}}>
                  <h2>Add Product</h2>
                  {imageURL ? (
                    <img src={imageURL} style={{ width: "100%", height: "200px" }} />
                  ) : (
                    ""
                  )}
                  <Form layout="vertical" form={form} onFinish={onSubmit}>
                    <Form.Item
                      label="title"
                      name="title"
                      rules={[{ required: true, message: "Please input title!" }]}
                    >
                      <Input name="title" />
                    </Form.Item>
        
                    <Form.Item
                      label="caption"
                      name="caption"
                      rules={[{ required: true, message: "Please input caption!" }]}
                    >
                      <Input name="caption" />
                    </Form.Item>
        
                    <Form.Item
                      label="img"
                      name="img"
                      rules={[{ required: true, message: "Please input img url!" }]}
                    >
                      <Input name="img" onChange={inputImageHandler} />
                    </Form.Item>
        
                    <Form.Item style={{ marginBottom: 0 }}>
                      <Form.Item
                        label="price"
                        name="price"
                        style={{ display: "inline-block", width: "calc(50% - 12px)" }}
                        rules={[{ required: true, message: "Please input price!" }]}
                      >
                        <InputNumber name="price" />
                      </Form.Item>
                      <span
                        style={{
                          display: "inline-block",
                          width: "24px",
                          lineHeight: "32px",
                          textAlign: "center",
                        }}
                      ></span>
                      <Form.Item
                        label="quantity"
                        name="quantity"
                        style={{ display: "inline-block", width: "calc(50% - 12px)" }}
                        rules={[{ required: true, message: "Please input quantity!" }]}
                      >
                        <InputNumber name="quantity" />
                      </Form.Item>
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </div> */}
                <h2>EditMode</h2>
            </div>);
          
};

export default EditProdcut;