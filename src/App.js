import { useState } from "react";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 2, description: "Condoms", quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setItem] = useState([]);

  function addNewItem(item) {
    setItem((items) => [...items, item]);
  }

  function toggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function deleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onNewItem={addNewItem} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onToggleItem={toggleItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Form({ onNewItem }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (!inputItem) return;

    const newItem = {
      quantity: numItem,
      description: inputItem,
      packed: false,
      id: Date.now(),
    };

    onNewItem(newItem);

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

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((items) => (
          <Item
            item={items}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={items.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
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
