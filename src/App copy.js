import React from 'react';
import './App.css'; // 新しい行: CSSファイルのインポート

const App = () => {
  const user = {
    icon: 'images/human1.png', // ユーザアイコンのパス
    accountNumber: '1234567890', // 口座番号
    username: 'John Doe', // ユーザ名
    balance: 1000 // 預金残高
  };

  return (
    <div className="container"> {/* クラス名を追加 */}
      <img src={user.icon} alt="User Icon" className="user-icon" /> {/* クラス名を追加 */}
      <p className="account-number">口座番号: {user.accountNumber}</p> {/* クラス名を追加 */}
      <p className="username">ユーザ名: {user.username}</p> {/* クラス名を追加 */}
      <p className="balance">預金残高: {user.balance}</p> {/* クラス名を追加 */}
    </div>
  );
};

export default App;
