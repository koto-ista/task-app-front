import React from 'react';
import Button from '../modules/Button';

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <h1 className="logo">メモメモ</h1>
        <h2 className="logo-sub">タスク管理アプリ</h2>
      </div>
      <div className="header-button-wrapper">
        <Button className="top" label="新規" onClick={() => {}}/>
      </div>
    </header>
  );
};

export default Header;