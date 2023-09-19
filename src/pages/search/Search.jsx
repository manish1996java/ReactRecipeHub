import { Card, Divider, Typography } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SearchedList from "./searched-list/SearchedList";

const { Title, Text } = Typography;

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
    <div className="page-padding">
      <div className="app-container">

        <Title level={2}>Search Result</Title>
        <Divider></Divider>
        {filteredList && filteredList.length ? (
          <SearchedList filteredList={filteredList} />
        ) : (
          <p style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ width: "10Rem" }}
              src="/public/undraw_page_not_found_re_e9o6.svg"
            />
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;
