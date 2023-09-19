import { BrowserRouter, Route, Routes } from "react-router-dom";

// import './App.css';
import Home from "./pages/home/Home";

import Login from "./pages/auth/Login/Login";
import Signup from "./pages/auth/Signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import Cart from "./pages/cart/Cart";
import AppHeader from "./components/app-header/AppHeader";
import PageNotFound from "./pages/auth/page-not-found/PageNotFound";
import Auth from "./pages/auth/Auth";
import ProtectedGuard from "./guards/ProtectedGuard";
import ProductView from "./pages/food/product-view/ProductView";
import Search from "./pages/search/Search";
import Food from "./pages/food/Food";


const App = () => {



  return (
    <>
      <BrowserRouter>
        <AppHeader />
        <div >
          <Routes>
            <Route path="food/:id" element={<ProductView />} />
            <Route path="food" element={<Food/>} />
            <Route path="cart" element={<Cart />} />
            <Route path="search/:query" element={<Search />} />
            <Route path="auth" element={<Auth />}>
              <Route path="signup" element={<Signup />} />
              <Route path="" element={<Login />} />
            </Route>

            <Route
              path="dashboard"
              element={
                <ProtectedGuard>
                  <Dashboard />
                </ProtectedGuard>
              }
            />
            <Route path="" exact element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
