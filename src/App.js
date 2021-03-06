import React from "react";
import PageRouter from "./Components/PageRouter/PageRouter";
import { AuthPovider } from "./Context Api/AuthContext";
import { ProductProvider } from "./Context Api/ProductContext";

function App() {
  return (
    <div className="App">
      <AuthPovider>
        <ProductProvider>
          <PageRouter />
        </ProductProvider>
      </AuthPovider>
    </div>
  );
}

export default App;
