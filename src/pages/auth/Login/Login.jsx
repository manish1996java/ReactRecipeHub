import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/reducers/auth-reducer";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Card } from "antd";
import "./Login.css";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const isAuth = useSelector((state) => {
    return state.authReducer.isAuth;
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("userEffect");
    if (isAuth) {
      navigate("/", { replace: "true" });
    }
  }, [isAuth]);

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
    // console.log("onSubmit", v);
    dispatch(login(v));
  };

  return (
    <>
      <div className="login-form">
        <Card style={{ width: 300 }} title="login">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            layout="vertical"
            onFinish={onSubmit}
            onFinishFailed={() => {}}
            autoComplete="off"
          >
            <Form.Item
              label="UserId"
              name="userId"
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

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" type="primary" block>
                Login
              </Button>
              <Link to={"/auth/signup"}>
                <Button htmlType="button" type="link" block>
                  SignUp
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Card>
        
      </div>
    </>
  );
};

export default Login;
