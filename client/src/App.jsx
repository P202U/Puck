import Header from './components/Header';
import Search from './components/Search';
// import List from './components/List';
import Recipe from './components/Recipe';

export default function App() {
  return (
    <div className="container mx-auto h-[90vh] w-full max-w-3xl rounded-lg bg-blue-400 p-2 text-white">
      <div className="h-full w-full space-y-14 overflow-auto rounded-lg bg-blue-500">
        <Header />
        <Search />
        {/* <List /> */}
        <Recipe />
      </div>
    </div>
  );
}
