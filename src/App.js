import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";
import { Users } from "./pages/Users";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Posts"} element={<Posts />} />
        <Route path={"/Users"} element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
