import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../../store/reducers/auth-reducer";
import { Breadcrumb, Button, Card, Checkbox, Form, Input, Select } from "antd";
import "./Signup.css";
import AppBreadcrumb from "../../../components/appbreadcrumb/AppBreadcrumb";

const Signup = () => {
 
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid,setIsFormValid] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(()=>{
    console.log("form",form);
    form.validateFields({validateOnly:true});
  },[form])



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
  
  const formValidation = async() => {
    try{
      const value = await form.validateFields();
      setIsFormValid(true);
    }catch(e){
      setIsFormValid(false);
    }
  }

  const onSubmit = (v) => {
    // e.preventDefault();
    // console.log("form",fo)
    console.log("onSubmit", v);
    dispatch(signup(v));
  };

  return (
    <>
      <div className="signup-form">
        <Card style={{ width: 300 }} title="signup">
          <Form
            form={form}
            name="basic"
            initialValues={{ remember: true }}
            layout="vertical"
            onFinish={onSubmit}
            // onValuesChange={formValidation}
            onFinishFailed={() => {}}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
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
            <Form.Item
            label="Role"
            name="role"
            rules={[
              { required: true, message: "select user type" },
            ]}
            >

              <Select
                // defaultValue="user"
                style={{ width: 120 }}
                options={[{ value: "user", label: "User" },{value:"admin",label:"Admin"}]}
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" type="primary" block>
                SignUp
              </Button>
              <Link to={"/auth/"}>
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
