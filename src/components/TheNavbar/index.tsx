import logo from "@/assets/logo.png";
import { Button, Input } from "antd";
import "./style.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function TheNavbar() {
  const [searchValue, setSearchValue] = useState(""); // 儲存輸入框的值
  const navigate = useNavigate();

  const handlePressSearch = (value: string) => {
    console.log("[test] Navbar search", value);
    navigate("/search", { state: { search: value } });
  };

  const handleClickSend = () => {
    console.log("[test] Navbar send", searchValue);
    handlePressSearch(searchValue); // 使用與回車相同的搜尋邏輯
  };

  const handleClickFavorite = () => {
    console.log("[test] Navbar favorite");
  };

  return (
    <div className="the-navbar">
      <div className="the-navbar__menus menus">
        <Link className="menus-logo" to="/">
          <img src={logo} alt="logo-text" />
        </Link>
        <div className="menus-items">
          <NavLink className="item" to="/market/coin">
            購買珠寶
          </NavLink>
          <NavLink className="item" to="/market/appearance">
            購買首飾
          </NavLink>
          <NavLink className="item" to="/market/character">
            購買擺件
          </NavLink>
        </div>
      </div>
      <div className="the-navbar__actions actions">
        <Input
          className="actions-search"
          placeholder="搜尋"
          prefix={<span className="material-symbols-outlined">search</span>}
          value={searchValue} // 綁定輸入框值
          onChange={(e) => setSearchValue(e.target.value)} // 更新輸入框值
          onPressEnter={(e) => handlePressSearch(e.currentTarget.value)} // 按下回車搜尋
        />
        <Button
          className="actions-item"
          type="text"
          shape="circle"
          icon={<span className="material-symbols-outlined">send</span>}
          onClick={handleClickSend} // 按下按鈕搜尋
        />
        <Button
          className="actions-item"
          type="text"
          shape="circle"
          icon={<span className="material-symbols-outlined">favorite</span>}
          onClick={handleClickFavorite}
        />
      </div>
    </div>
  );
}
