import React from "react";
import {Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import BookCardPage from "./pages/BookCardPage";
import CatalogPage from "./pages/CatalogPage";

function App() {
  return (
      <Routes>
        <Route path="/Home" element={<HomePage />}></Route>
        <Route path="/Book" element={<BookCardPage />}></Route>
        <Route path="/Catalog" element={<CatalogPage />}></Route>
      </Routes>
  );
}

export default App;
