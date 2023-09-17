import { Card, Typography } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const {Title,Text} = Typography;

const Search = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [filteredList, SetFilteredList] = useState([]);
  const { products } = useSelector((state) => {
    return state.productReducer;
  });

  useEffect(() => {
    const { query } = params;
    console.log("param", params);
    filterList(query);
  }, [navigate]);

  const filterList = (searchTerm) => {
    console.log("searchTerm", searchTerm);
    let filteredProducts = products.filter((product) => {
      let itemValues = Object.values(product);
      // console.log('itemValues', itemValues);
      let isItemMatchInside = itemValues.some((item) => {
        // console.log("some", item);
        if (typeof item === "number") {
        //   console.log("item in number", item.toString());
          return item.toString().includes(searchTerm);
        } else {
        //   console.log("item in string", item);
          if (typeof item === "boolean") {
            return false;
          }
          return item.includes(searchTerm);
        }
      });
    //   console.log("value", isItemMatchInside);
      return isItemMatchInside;
    });
    SetFilteredList(filteredProducts);
    console.log("filteredProducts", filteredProducts);
  };

  return (
    <div className="app-container">
      {filteredList.map((p, i) => {
        return (
          <p key={i} style={{cursor:"pointer"}}>
              <Card
                type="inner"
                // title={p.title}
                // extra={<a href="#">More</a>}
              >
                <div style={{display:"flex",gap:"1rem"}}>
                    <img src={p.img} style={{width:"10rem",aspectRatio:"1/1.2"}}/>
                    <div style={{flex:"1 1"}}>
                        <Title level={3}>{p.title?.toUpperCase()} </Title>
                        <Title level={5}>{p.caption?.toUpperCase()} </Title>
                        <Text>{p.description}</Text>
                        <Title level={2} style={{marginTop:"1rem!important;"}}>${p.price} </Title>
                    </div>
                </div>
              </Card>
          </p>
        );
      })}
    </div>
  );
};

export default Search;
