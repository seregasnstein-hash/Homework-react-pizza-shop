import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPizza } from "../redux/pizzasSlice";
import { useNavigate } from "react-router-dom";
import "../styles/AddPizza.css";

function AddPizza() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !description || !price || !image || !category) {
      setError("Заполните все поля");
      return;
    }

    if (Number(price) <= 0) {
      setError("Цена должна быть больше нуля");
      return;
    }

    setError("");

    dispatch(
      addPizza({
        id: Date.now(),
        name,
        description,
        price: Number(price),
        image,
        category,
      }),
    );

    setName("");
    setDescription("");
    setPrice("");
    setImage("");
    setCategory("");

    navigate("/");
  };

  return (
    <div className="add-pizza-page">
      <div className="add-pizza-card">
        <h1>Добавить пиццу</h1>
        <p className="add-pizza-subtitle">Заполните информацию о новой пицце</p>

        <form className="add-pizza-form" onSubmit={handleSubmit}>
          {error && <p className="form-error">{error}</p>}

          <label htmlFor="pizza-name">Название</label>
          <input
            id="pizza-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Например, Пепперони"
          />

          <label htmlFor="pizza-description">Описание</label>
          <textarea
            id="pizza-description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Расскажите о составе пиццы"
            rows="4"
          />

          <label htmlFor="pizza-price">Цена в тенге</label>
          <input
            id="pizza-price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            type="number"
            min="1"
            placeholder="Например, 2500"
          />

          <label htmlFor="pizza-image">Ссылка на изображение</label>
          <input
            id="pizza-image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            type="text"
            placeholder="https://example.com/pizza.jpg"
          />

          <label htmlFor="pizza-category">Категория</label>
          <select
            id="pizza-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="" disabled>
              Выберите категорию
            </option>
            <option value="Мясная">Мясная</option>
            <option value="Сырная">Сырная</option>
            <option value="Вегетарианская">Вегетарианская</option>
            <option value="Острая">Острая</option>
          </select>

          <button type="submit">Добавить пиццу</button>
        </form>
      </div>
    </div>
  );
}

export default AddPizza;
