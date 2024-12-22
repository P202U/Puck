import { useState, useRef } from 'react';

export default function Search() {
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newItem = formData.get('item');

    if (newItem) {
      setItems(prevItems => [...prevItems, newItem]);
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  }

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-2xl space-x-4"
      >
        <input
          type="text"
          name="item"
          placeholder="Enter something..."
          className="flex-1 rounded-md px-4 py-2 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-800 hover:shadow-lg"
          ref={inputRef}
        />
        <button
          type="submit"
          className="rounded-md bg-blue-700 px-6 py-2 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-800 hover:shadow-lg"
        >
          Add Item +
        </button>
      </form>
      <section className="mx-auto w-full max-w-2xl p-4">
        <h2 className="mb-8 text-2xl font-semibold text-gray-200 transition-all duration-300 ease-in-out hover:scale-105">
          Items on hand:
        </h2>
        <ul className="list-none space-y-2 pl-5 text-gray-100">
          {items.map((item, index) => (
            <li
              key={index}
              className="mb-2 rounded-md bg-gray-800 px-4 py-2 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
