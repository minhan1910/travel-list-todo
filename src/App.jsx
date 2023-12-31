/* eslint-disable react/prop-types */
import { useState } from "react";
import Stats from "./Components/Stats";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/Item/PackingList";

const initialItems = [
  {
    id: 1,
    description: "Passports",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: true,
  },
  {
    id: 3,
    description: "Charger",
    quantity: 1,
    packed: false,
  },
];

function App() {
  const [items, setItems] = useState(initialItems);
  let isCheckedAll = false;

  const itemsIsChecked = items.filter((item) => item.packed);
  if (itemsIsChecked.length === items.length) {
    isCheckedAll = true;
  }

  function handleAddItems(item) {
    // react is immutate can not push like it so we need to destruct creaete new state
    // setItems((items) => items.push(item));
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateAllItems(isCheckedAll) {
    setItems((items) =>
      items.map((item) => {
        return { ...item, packed: isCheckedAll };
      })
    );
  }

  function handleUpdateItem(id) {
    const item = items.findIndex((item) => item.id === id);

    if (item !== -1) {
      setItems((items) =>
        items.map((item) =>
          item.id === id ? { ...item, packed: !item.packed } : item
        )
      );
    }
  }

  function getNumberOfItems() {
    return items.length;
  }

  function getNumberOfItemsPacked() {
    return items.filter((item) => item.packed).length;
  }

  function getPercentageNumberOfItemsPacked() {
    return Math.round((getNumberOfItemsPacked() / getNumberOfItems()) * 100);
  }

  const getFunctions = {
    getNumberOfItems,
    getNumberOfItemsPacked,
    getPercentageNumberOfItemsPacked,
  };

  const handleFunctions = {
    onUpdateItem: handleUpdateItem,
    onUpdateAllItems: handleUpdateAllItems,
    onDeleteItem: handleDeleteItem,
    onClearItems: hanldeClearItems,
  };

  function hanldeClearItems() {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete all items ?"
    );

    if (isConfirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        // onUpdateItem={handleUpdateItem}
        // onUpdateAllItems={handleUpdateAllItems}
        // onDeleteItem={handleDeleteItem}
        items={items}
        isCheckedAll={isCheckedAll}
        // onClearItems={hanldeClearItems}
        {...handleFunctions}
      />
      <Stats {...getFunctions} />
    </div>
  );
}

export default App;
