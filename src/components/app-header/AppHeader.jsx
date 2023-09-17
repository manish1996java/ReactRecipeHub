import { useDispatch, useSelector } from "react-redux";
import "./AppHeader.css";
import { NavLink, useNavigate } from "react-router-dom";
import {Avatar, Badge, Button, Dropdown} from 'antd';
import { ShoppingCartOutlined} from '@ant-design/icons';
import { logout } from "../../store/reducers/auth-reducer";
import FilterInput from "../../pages/home/filter-input/FilterInput";

const AppHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector((state)=>{
    // console.group("isAuth",state);
    return state.authReducer.isAuth;
  })
  const carts = useSelector((state)=>{
      // console.log("appheader",state.cartReducer.carts);
      return state.cartReducer.carts;
  })

  const userLogout = () => {
    dispatch(logout())
  }

  const navigationsBasedOnAuth = () => {
    return isAuth ? (
      <Dropdown
      menu={{
        items,
      }}
      placement="bottomLeft"
      arrow
    >
      <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>
    </Dropdown>
    ):(
      <NavLink to="/auth/">
                <Button > Login </Button>
              </NavLink>
    );
  }

  const items = [
    {
      key: '1',
      label: (
        <a onClick={userLogout}>
            Logout
        </a>
      ),
    },
  ];


  const onSearch = (v) => {
    console.log("value----->",v.trim().length);
    if(v && v.trim().length > 0) {
      console.log('inside if');
      navigate(`/search/${v}`)
    }
  }


  return (
    <div className="app-header">
      <div className="app-container">
        <div className="app-header-container">
          <span className="logo">
            
            <NavLink to="/">ZOMO</NavLink>
          </span>
          <div className="space-box"></div>
          <ul className="header-nav">
          <li>
              <div>
                <FilterInput onSearch={onSearch}/>
              </div>
            </li>
            <li>
              <div>
                <NavLink to="">Home</NavLink>
              </div>
            </li>
            <li>
              <div>
                <NavLink to="dashboard">Dashboard</NavLink>
              </div>
            </li>
            <li>
            <NavLink to="cart">
              <Badge count={carts.length}>
                <ShoppingCartOutlined  style={{ fontSize: '20px', color: '#08c' }}/>
              </Badge>
            </NavLink>
            </li>
            <li>
              <div>
                {navigationsBasedOnAuth()}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
