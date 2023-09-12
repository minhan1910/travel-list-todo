/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Items";

function PackingList({
  items,
  onDeleteItem,
  onUpdateItem,
  onClearItems,
  onUpdateAllItems,
  isCheckedAll,
}) {
  const [sortBy, setSortBy] = useState("input");

  const filterBy = {
    input: (a, b) => b.id - a.id,
    description: (a, b) => a.description.localeCompare(b.description),
    packed: (a, b) => Number(a.packed) - Number(b.packed),
  };

  const sortedItems = items.slice().sort(filterBy[sortBy]);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onUpdateItem={onUpdateItem}
            onDeleteItem={onDeleteItem}
            {...item}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>

        <button onClick={onClearItems}>Clear List</button>

        <div
          style={{
            margin: "2rem 1rem",
            border: "2px solid #fff",
            textAlign: "center",
          }}
        >
          <span style={{ marginRight: "1rem" }}>Check All</span>
          <input
            type="checkbox"
            checked={isCheckedAll}
            onChange={(e) => {
              onUpdateAllItems(Boolean(e.target.checked));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PackingList;
