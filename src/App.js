import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./styles/App.css";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import AddPizza from "./pages/AddPizza";
import EditPizza from "./pages/EditPizza";

function App() {
  const cart = useSelector((state) => state.cart);

  const cartCount = cart.reduce((total, pizza) => total + pizza.quantity, 0);

  return (
    <BrowserRouter>
      <header>
        <h2>Pizza House</h2>

        <nav>
          <NavLink to="/">Пицца</NavLink>
          <NavLink to="/cart">Корзина({cartCount})</NavLink>
          <NavLink to="/admin">Изменить</NavLink>
          <NavLink to="/admin/add">Добавить</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add" element={<AddPizza />} />
          <Route path="/admin/edit/:id" element={<EditPizza />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
