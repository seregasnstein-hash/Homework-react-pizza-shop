import PizzaCard from "../components/PizzaCard";
import { useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const [search, setSearch] = useState("");
  const pizzas = useSelector((state) => state.pizzas);

  const filteredPizzas = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1>Вкуснячая пицца:</h1>
      <input
        className="pizza-search"
        type="text"
        placeholder="Найти пиццу..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {filteredPizzas.length === 0 && (
        <p>Пиццы не найдены. Попробуйте другой запрос.</p>
      )}
      <div className="pizza-grid">
        {filteredPizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default Home;
