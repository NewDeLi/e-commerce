import React from "react";
import PageRouter from "./Components/PageRouter/PageRouter";
import { AuthPovider } from "./firebase/auth";

function App() {
  return (
    <div className="App">
      <AuthPovider>
        <PageRouter />
      </AuthPovider>
    </div>
  );
}

export default App;
