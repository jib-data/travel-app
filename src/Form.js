import { useState } from "react";

export function Form({ onNewItem }) {
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
