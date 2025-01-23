//views/home/components/search-card/index.tsx
import { Card, Tabs,TabsProps,Input,Button} from "antd";
import React , { useState } from 'react';
import './style.scss';
import searchDecorate from './search-decorate.png'
import {useNavigate } from "react-router-dom";

const SearchCard: React.FC = () => {
  const [searchValue, setSearchValue] = useState(""); // 儲存輸入框的值
  const navigate = useNavigate();

  const handlePressSearch = (value: string) => {
    console.log("[test] Navbar search", value);
    navigate("/search", { state: { search: value } });
  };

  const handleClickSend = () => {
    console.log("[test] Button search", searchValue);
    handlePressSearch(searchValue); // 使用相同的搜尋邏輯
  };

  const items: TabsProps['items'] = [
    {key: '1',label: '珠寶',},
    {key: '2',label: '首飾',},
    {key: '3',label: '擺件',},
  ];
  return (
    
    <Card className="search-card">
      <Tabs defaultActiveKey="1" items={items} tabBarStyle={{ color: "red" }} />
      <Input 
        size="large" 
        placeholder="搜尋"  
        prefix={<span className="icon material-symbols-outlined">search</span>}
        onChange={(e) => setSearchValue(e.target.value)}
        onPressEnter={(e) => handlePressSearch(e.currentTarget.value)} />
   
      <Button
        type="primary"
        shape="circle"
        onClick={handleClickSend}>搜尋
      </Button>

      <img className="search-card_decorate decorate-1" src={searchDecorate} />
      <img className="search-card_decorate decorate-2" src={searchDecorate} />
      <img className="search-card_decorate decorate-3" src={searchDecorate} />
    </Card>

  );
};

export default SearchCard;