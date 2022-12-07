import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </Layout>
  );
}

export default App;
