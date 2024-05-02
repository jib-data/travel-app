import { useState } from "react";
import Logo from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
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
  function clearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItem([]);
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
        onClearItem={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}
