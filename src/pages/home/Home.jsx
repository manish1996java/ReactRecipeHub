import ProductCard from "../../components/product-card/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/reducers/cart-reducer.js";
import FilterInput from "./filter-input/FilterInput";
import AppBreadcrumb from "../../components/appbreadcrumb/AppBreadcrumb";

const Home = () => {
    // const [filteredProducts,setFilteredProducts] = useState([]);

    const products = useSelector((state)=>{
        console.log('useSelector',state);
        return state.productReducer.products;
    })

    const dispatch = useDispatch();

    const addToCartFun = (index) =>{
      // console.log("addToCart",addToCart);  
      dispatch(addToCart(index));
    }




  return (
    <div>
      {/* <FilterInput filterList={filterList}/> */}
      {/* <AppBreadcrumb/> */}
      <div style={{display:"flex",justifyContent:"space-around",gap:"1rem", flexWrap: "wrap"}}>
          {products.map((product,i)=> <ProductCard key={i} {...product} index={i} addToCartHandler={()=>addToCartFun(product)}  />)}         
      </div>
    </div>
  );
};

export default Home;
