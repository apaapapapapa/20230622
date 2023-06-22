import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./Top";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Top />} />
        <Route path={`/Home`} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
