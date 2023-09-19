import { Card, Typography } from 'antd';
import SearchListCard from '../searched-list-card/SearchListCard';


const SearchedList = ({filteredList}) => {
    return (
        <>
          {filteredList.map((p, i) => {
        return (
          <p key={i} style={{cursor:"pointer"}}>
              <SearchListCard product={p}/>
          </p>
        );
      })}  
        </>
    );
};

export default SearchedList;