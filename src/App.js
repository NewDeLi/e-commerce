import React from "react";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Registriation from "./pages/Registriation/Registriation";
import MainLayout from "./Layout/MainLayout";
import Search from "./pages/Search/Search";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainLayout>
              <Homepage />
            </MainLayout>
          }
        />
        <Route
          path="/search"
          element={
            <MainLayout>
              <Search />
            </MainLayout>
          }
        />
        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />
        <Route
          path="/registriation"
          element={
            <MainLayout>
              <Registriation />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
