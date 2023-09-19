import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/reducers/cart-reducer";
import ProductCard from "../../components/product-card/ProductCard";
import { addLike } from "../../store/reducers/liked-reducer";


const Food = () => {
    const products = useSelector((state)=>{
        console.log('useSelector',state);
        return state.productReducer.products;
    })
    const likes = useSelector((state)=>{
      console.log('useSelector',state);
      return state.likedReducer.likes;
  })

    const dispatch = useDispatch();

    const addToCartFun = (index) =>{
      // console.log("addToCart",addToCart);  
      dispatch(addToCart(index));
    }

    const onLikedProduct = (product) =>{
      dispatch(addLike(product));
    }



  return (
    <div className="page-padding">
      {/* <FilterInput filterList={filterList}/> */}
      {/* <AppBreadcrumb/> */}
      <div style={{display:"flex",justifyContent:"space-around",gap:"1rem", flexWrap: "wrap"}}>
          {products.map((product,i)=> <ProductCard key={i} {...product} index={i} addToCartHandler={()=>addToCartFun(product)} onLikedProduct={()=>onLikedProduct(product)} likes={likes}  />)}         
      </div>
    </div>
  );
};

export default Food;