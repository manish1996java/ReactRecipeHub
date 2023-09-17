import Search from 'antd/es/input/Search';
import React from 'react';

const FilterInput = ({onSearch}) => {
    return (
        <div>
            <Search  placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        </div>
    );
};

export default FilterInput;