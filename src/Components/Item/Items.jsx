/* eslint-disable react/prop-types */
function Item({
  id,
  description,
  quantity,
  packed,
  onDeleteItem,
  onUpdateItem,
}) {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        defaultChecked={packed}
        onChange={() => onUpdateItem(id)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}

export default Item;
