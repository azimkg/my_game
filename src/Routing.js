import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES_NAME } from "./helpers/Routes";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES_NAME?.map((route) => (
          <Route key={route.id} path={route.link} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
