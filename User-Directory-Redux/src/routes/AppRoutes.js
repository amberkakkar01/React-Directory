import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormComponent from "../components/FormComponent";
import TableComponent from "../components/TableComponent";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<TableComponent />} />
      <Route path="/addUser" element={<FormComponent />} />
    </Routes>
  );
};

export default AppRoutes;
