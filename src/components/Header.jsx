import reactLogo from '../assets/react.svg';

export default function Header() {
  return (
    <header className="flex h-28 items-center justify-center space-x-6 rounded-lg bg-gray-800">
      <img
        src={reactLogo}
        alt="react logo"
        className="h-14 transition-all duration-300 ease-in-out hover:rotate-180 hover:scale-125"
      />
      <h1 className="text-5xl font-semibold transition-all duration-300 ease-in-out hover:scale-105">
        React App
      </h1>
    </header>
  );
}
