import { useDispatch, useSelector } from "react-redux";
import {
  changeMode,
  selectedProduct,
} from "../../store/reducers/product-reducer";
import ProductList from "./product-list/ProductList";
import ProductDisplayCard from "./product-display-card/ProductDisplayCard";
import ProductMode from "../../enums/ProductMode";
import { Button, Divider } from "antd";
import AddProduct from "./add-product/AddProduct";
import EditProdcut from "./edit-product/EditProdcut";

const Dashboard = () => {
  const { products, selectedIndex, mode } = useSelector((state) => {
    console.log("savedProducts", state.productReducer);
    return state.productReducer;
  });

  const dispatch = useDispatch();

  function onSelectCard(index) {
    console.log(index);
    dispatch(selectedProduct(index));
  }

  function addProductMode() {
    dispatch(changeMode(ProductMode.add));
  }

  function onEditProduct() {
    dispatch(changeMode(ProductMode.edit));
  }

  function renderBasedOnMode() {
    if (mode == ProductMode.add) {
      return <AddProduct />;
    } else if (mode == ProductMode.edit) {
      return <EditProdcut />;
    } else {
      return <ProductDisplayCard product={products[selectedIndex]} onEditProduct={onEditProduct} />;
    }
  }

  return (
    <>
      <div className="app-container">
        <Button onClick={addProductMode}>Add Product</Button>
        <Divider></Divider>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div style={{ width: "50%" }}>
            <ProductList products={products} onSelectCard={onSelectCard} />
          </div>
          <div style={{ width: "50%" }}>
            <div style={{ width: "50%", position: "sticky", top: "5rem" }}>
              {renderBasedOnMode()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
