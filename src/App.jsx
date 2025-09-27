import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Page/Home";
import Layout from "./Page/Layout.jsx";
import PageSignUp from "./Page/PageSign.jsx";
import PageLogin from "./Page/PageLogin.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/login" element={<PageLogin />} />
          <Route path="/signup" element={<PageSignUp />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
