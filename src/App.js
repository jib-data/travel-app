import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Condoms", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputItem) return;
    const newItem = {
      quantity: numItem,
      description: inputItem,
      packed: false,
      id: Date.now(),
    };

    setInputItem("");
    setNumItem(1);
  }

  const [numItem, setNumItem] = useState(1);
  const [inputItem, setInputItem] = useState("");

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 😍😍</h3>
      <select
        value={numItem}
        onChange={(e) => setNumItem(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="input item"
        value={inputItem}
        onChange={(e) => setInputItem(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((items) => (
          <Item item={items} key={items.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <span>
        <button>❌</button>
      </span>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you packed X</em>
    </footer>
  );
}
