import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">RechargeNow</h1>
        <button
          onClick={toggleTheme}
          className="bg-white dark:bg-gray-700 text-blue-600 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
        >
          {dark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
