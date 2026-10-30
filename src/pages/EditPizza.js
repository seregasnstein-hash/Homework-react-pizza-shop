import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editPizza } from "../redux/pizzasSlice";
import { useState } from "react";
import "../styles/EditPizza.css";

function EditPizza() {
  const { id } = useParams();
  const pizzas = useSelector((state) => state.pizzas);

  const pizza = pizzas.find((pizza) => pizza.id === Number(id));

  const [name, setName] = useState(pizza?.name || "");
  const [description, setDescription] = useState(pizza?.description || "");
  const [price, setPrice] = useState(pizza?.price || "");
  const [image, setImage] = useState(pizza?.image || "");
  const [category, setCategory] = useState(pizza?.category || "");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !description.trim() ||
      !price ||
      !image.trim() ||
      !category.trim()
    ) {
      setError("Заполните все поля");
      return;
    }

    if (Number(price) <= 0) {
      setError("Цена должна быть больше нуля");
      return;
    }

    setError("");

    dispatch(
      editPizza({
        id: pizza.id,
        name,
        description,
        price: Number(price),
        image,
        category,
      }),
    );

    navigate("/admin");
  };

  return (
    <div className="edit-pizza-page">
      <h1>Редактирование пиццы</h1>

      {pizza ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Название:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label>Описание:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label>Цена:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <label>Ссылка на изображение:</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div>
            <label>Категория:</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          {error && <p className="edit-pizza-error">{error}</p>}
          <button type="submit" className="edit-pizza-btn">
            Сохранить изменения
          </button>
        </form>
      ) : (
        <p>Пицца не найдена</p>
      )}
    </div>
  );
}

export default EditPizza;
