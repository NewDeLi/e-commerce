import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import AdminToolbar from "../AdminToolbar/AdminToolbar";

//Layouts
import HomepageLayout from "../../Layout/HomepageLayout";
import MainLayout from "../../Layout/MainLayout";

//pages
import Homepage from "../../pages/Homepage";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Search from "../../pages/Search/Search";
import Cart from "../../pages/Cart/Cart";
import MyAccount from "../../pages/MyAccount/MyAccount";
import Admin from "../../pages/Admin/Admin";
import ProductsDetails from "../../pages/ProductsDetails/ProductsDetails";

//high order components
import WithAuth from "../highOrderComponents/withAuth";
import WithAdminAuth from "../highOrderComponents/withAdminAuth";
import AdminLayout from "../../Layout/AdminLayout";

export default function PageRouter() {
  return (
    <>
      <AdminToolbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
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
          path="/search/:filterType"
          element={
            <MainLayout>
              <Search />
            </MainLayout>
          }
        />
        <Route
          path="/product/:productID"
          element={
            <MainLayout>
              <ProductsDetails />
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
          path="/myAccount"
          element={
            <WithAuth>
              <MainLayout>
                <MyAccount />
              </MainLayout>
            </WithAuth>
          }
        />
        <Route
          path="/register"
          element={
            <MainLayout>
              <Register />
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          }
        />
      </Routes>
    </>
  );
}
