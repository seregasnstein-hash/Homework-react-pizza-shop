import { useSelector, useDispatch } from "react-redux";
import { removePizza } from "../redux/pizzasSlice";
import "../styles/Admin.css";
import { Link } from "react-router-dom";

function Admin() {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizzas);

  return (
    <div className="admin-page">
      <h1>Управление товарами</h1>

      <div className="admin-pizza-list">
        {pizzas.map((pizza) => (
          <div className="admin-pizza-item" key={pizza.id}>
            <img
              className="admin-pizza-image"
              src={pizza.image}
              alt={pizza.name}
            />

            <div className="admin-pizza-info">
              <h3>{pizza.name}</h3>
              <p>{pizza.description}</p>
              <strong>{pizza.price} тг</strong>
              <span className="admin-pizza-category">{pizza.category}</span>
            </div>

            <div className="admin-pizza-actions">
              <Link to={`/admin/edit/${pizza.id}`}>
                <button className="admin-edit-btn">Редактировать</button>
              </Link>

              <button
                className="admin-delete-btn"
                onClick={() => dispatch(removePizza(pizza.id))}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
