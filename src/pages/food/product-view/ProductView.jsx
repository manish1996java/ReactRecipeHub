import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../../store/reducers/cart-reducer";
import { Button } from "antd";
import {Carousel} from "react-responsive-carousel"
import './ProductView.css';


const ProductView = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const products = useSelector((state)=>{
      console.log("useSelector",state.productReducer.products);
      return state.productReducer.products
    })

    const addIntoCart = () =>{
      console.log("addIntoCart",products[id]);
      dispatch(addToCart(products[id]))
    }


    return (
      <>
        <div className="product-view">

            <div className="product-img">

              {/* <img src={products[id].img}/> */}
              <Carousel showArrows={true}>
                {
                  products[id].imgs.map((image,i)=>{
                    return (
                      <div key={i}>
                        <img src={image.img} loading="lazy"/>
                      </div>
                    );
                  })
                }
              </Carousel>

            </div>
            <div className="product-description">
              <h1 className="product-title">{products[id].title}</h1>
              <h2 className="product-price">${products[id].price}</h2>
              <h4 className="product-quantity"> quantity: {products[id].quantity}</h4>
              <Button block> Add to cart</Button>
            </div>
        </div>
      </>
    );
};

export default ProductView;