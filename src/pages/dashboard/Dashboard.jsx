import { useDispatch, useSelector } from "react-redux";
import {
  changeMode,
  deleteProduct,
  selectedProduct,
} from "../../store/reducers/product-reducer";
import ProductList from "./product-list/ProductList";
import ProductDisplayCard from "./product-display-card/ProductDisplayCard";
import ProductMode from "../../enums/ProductMode";
import { Button, Divider, Modal, message } from "antd";
import AddProduct from "./add-product/AddProduct";
import EditProdcut from "./edit-product/EditProdcut";
import { ExclamationCircleFilled } from "@ant-design/icons";

const {confirm} = Modal;





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

  function onDeleteProduct(record) {
    console.log("onDeleteProduct", record.id);
    confirm({
      title: `Are you sure delete this "${record.title}"?`,
      icon: <ExclamationCircleFilled />,
      content: "You won't be get back. The product will be permanent deleted. ",
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        dispatch(deleteProduct(record.id)); 
        message.success("deleted successfully");
      },
      onCancel() {
        console.log('Cancel');
      }});

    // dispatch(deleteProduct(id));
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
    <div className="page-padding">
      <div className="app-container">
        <Button onClick={addProductMode}>Add Product</Button>
        <Divider></Divider>
        <div style={{ display: "flex", gap: "1rem" }}>
          <div style={{ width: "70%" }}>
            <ProductList products={products} onSelectCard={onSelectCard} onDeleteProduct={onDeleteProduct} />
          </div>
          <div style={{ width: "30%" }}>
            <div style={{ width: "50%", position: "sticky", top: "5rem" }}>
              {renderBasedOnMode()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
