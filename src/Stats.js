export function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Pack your stuff ASAP 🚀</em>{" "}
      </p>
    );
  }
  const numItems = items.length;
  const packedItems = items.map((item) => item.packed).length;
  const percentPacked = Math.round((numItems / packedItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You are all set!✈️"
          : `You have ${numItems} items on your list, and you packed ${packedItems}`}
      </em>
    </footer>
  );
}
