export default function Recipe() {
  return (
    <section className="mx-auto flex max-h-[110px] w-full max-w-2xl space-x-4 rounded-lg bg-blue-300 p-6 text-gray-600 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-800 hover:text-white hover:shadow-lg">
      <div className="w-full">
        <h2 className="mb-1 text-3xl font-semibold">Ready for a Recipe?</h2>
        <p className="text-lg">Generate a recipe from your list of items</p>
      </div>
      <button className="rounded-md bg-blue-700 p-2 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-600 hover:shadow-lg">
        Get a Recipe
      </button>
    </section>
  );
}
