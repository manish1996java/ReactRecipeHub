import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input, Form, Card, InputNumber } from "antd";
import { addProduct } from "../../../store/reducers/product-reducer";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [imageURL, setImageURL] = useState("");

  const [product, setProduct] = useState({
    title: "",
    caption: "",
    img: "",
    price: 0,
  });

  const onSubmit = (value) => {
    console.log("onSubmit", value);
    console.log("form", form);
    dispatch(addProduct(value));
    form.resetFields();
  };

  const isValidImage = (url, callback) => {
    if (url && typeof url === "string") {
      let img = new Image();
      img.onload = function () {
        callback(true);
      };
      img.onerror = function () {
        callback(false);
      };
      img.src = url;
    }
  };

  function inputImageHandler(e) {
    // e.preventDefault();
    // const { name, value } = e.target;
    // setProduct((prevState) => {
    //   return {
    //     ...prevState,
    //     [name]: value,
    //   };
    // });

    if (e.target.value) {
      setImageURL(e.target.value);
    }
  }

  return (
    <div>
      <div className="addProduct">
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
      </div>
    </div>
  );
};

export default AddProduct;
