import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Cart } from "./Cart";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};
