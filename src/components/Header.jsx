import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl">My Portfolio</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </header>
  );
};

export default Header;
