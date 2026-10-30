import "../styles/PizzaCard.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function PizzaCard({ pizza }) {
  const dispatch = useDispatch();
  return (
    <div className="pizza-card">
      <img src={pizza.image} alt={`Картинка: ${pizza.name}`} />
      <div className="pizza-card-content">
        <h3>{pizza.name}</h3>
        <p>Описание: {pizza.description}</p>
        <p className="pizza-price">Цена: {pizza.price} тг</p>
        <p className="pizza-category">Категория: {pizza.category}</p>
      </div>
      <div className="btnAddToCart">

      <button onClick={() => dispatch(addToCart(pizza))}>В корзину</button>
      </div>
    </div>
  );
}

export default PizzaCard;
