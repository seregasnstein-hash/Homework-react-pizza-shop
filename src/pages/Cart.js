import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, changeQuantity } from "../redux/cartSlice";
import "../styles/Cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce(
    (total, pizza) => total + pizza.price * pizza.quantity,
    0,
  );

  return (
    <div className="cart-page">
      <h1>Корзина</h1>

      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((pizza) => (
              <div className="cart-item" key={pizza.id}>
                <img src={pizza.image} alt={pizza.name} />

                <div className="cart-item-info">
                  <h3>{pizza.name}</h3>
                  <p>Цена: {pizza.price} тг</p>
                  <div className="cart-quantity">
                    <button
                      onClick={() =>
                        dispatch(changeQuantity({ id: pizza.id, amount: -1 }))
                      }
                    >
                      −
                    </button>

                    <span>{pizza.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch(changeQuantity({ id: pizza.id, amount: 1 }))
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="cart-remove-btn"
                    onClick={() => dispatch(removeFromCart(pizza.id))}
                  >
                    Удалить
                  </button>
                  <strong>Сумма: {pizza.price * pizza.quantity} тг</strong>
                </div>
              </div>
            ))}
          </div>

          <h2>Итого: {totalPrice} тг</h2>
        </>
      )}
    </div>
  );
}

export default Cart;
