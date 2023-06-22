import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // BootstrapのCSSをインポート
import "./App.css"; // カスタムCSSをインポート
import Routers from "./Router";

const App = () => {
  return (
    <div className="App">
      <Routers />
    </div>
  );
};

export default App;
