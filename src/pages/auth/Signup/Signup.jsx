import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../../store/reducers/auth-reducer";
import { Breadcrumb, Button, Card, Checkbox, Form, Input } from "antd";
import "./Signup.css";
import AppBreadcrumb from "../../../components/appbreadcrumb/AppBreadcrumb";

const Signup = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onUserIdChange = (e) => {
    e.preventDefault();
    console.log("userId", e.target.value);
    setUserId(e.target.value);
  };

  const onPasswordChange = (e) => {
    e.preventDefault();
    console.log("password", e.target.value);
    setPassword(e.target.value);
  };

  const onSubmit = (v) => {
    // e.preventDefault();
    console.log("password",v)
    dispatch(signup({ userId, password }));
  };

  return (
    <>
      <div className="signup-form">
        <Card style={{ width: 300 }} title="signup">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            layout="vertical"
            onFinish={onSubmit}
            onFinishFailed={() => {}}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input onChange={onUserIdChange} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password onChange={onPasswordChange} />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item 
            >
              <Button htmlType="submit" type="primary" block>
                SignUp
              </Button>
              <Link to={'/auth/'}>
                <Button htmlType="button" type="link" block>
                  Login
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Card>
    
      </div>
    </>
  );
};

export default Signup;
