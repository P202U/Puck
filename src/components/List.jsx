export default function List() {
  return (
    <section className="mx-auto w-full max-w-2xl p-4">
      <h2 className="mb-8 text-2xl font-semibold text-gray-200 transition-all duration-300 ease-in-out hover:scale-105">
        Items on hand:
      </h2>
      <ul className="list-disc space-y-2 pl-5 text-gray-100"></ul>
    </section>
  );
}
