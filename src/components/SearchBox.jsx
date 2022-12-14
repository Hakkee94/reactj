import React, {useContext} from 'react';
import HeaderIcon from "./HeaderIcon";
import * as imgs from "../img";
import { Input } from 'antd';
import {MyContext} from "../App";
import {SearchOutlined} from "@ant-design/icons";
import './Search.css'


const SearchBox = () => {
    const {setSearch} = useContext(MyContext)


    return (
        <div className='search'>
            <Input onChange={event => setSearch(event.target.value)} placeholder="Поиск задачи" prefix={<SearchOutlined />}/>
        </div>
    );
};

export default SearchBox;