import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // BootstrapのCSSをインポート
import "./App.css"; // カスタムCSSをインポート
import icon from "./images/human1.png";

const Top = () => {
  const user = {
    icon,
    accountNumber: "12345678901",
    username: "John Doe",
    balance: 1000,
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card text-center shadow">
          <img
            src={user.icon}
            alt="User Icon"
            className="card-img-top user-icon"
          />
          <div className="card-body">
            <h5 className="card-title">ユーザ情報</h5>
            <p className="card-text">口座番号: {user.accountNumber}</p>
            <p className="card-text">ユーザ名: {user.username}</p>
            <p className="card-text">預金残高: {user.balance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
