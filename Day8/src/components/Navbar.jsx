import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { isDark } = useTheme();
  const { user } = useUser();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`p-4 shadow-lg ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <h1 className="text-xl font-bold">Mobile Recharge</h1>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`hover:text-blue-500 transition-colors ${
              isActive('/') ? 'text-blue-500 font-semibold' : isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/recharge-options" 
            className={`hover:text-blue-500 transition-colors ${
              isActive('/recharge-options') ? 'text-blue-500 font-semibold' : isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Recharge
          </Link>
          
          {user.name ? (
            <Link 
              to="/dashboard" 
              className={`hover:text-blue-500 transition-colors ${
                isActive('/dashboard') ? 'text-blue-500 font-semibold' : isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link 
                to="/login" 
                className={`hover:text-blue-500 transition-colors ${
                  isActive('/login') ? 'text-blue-500 font-semibold' : isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
          
          <ThemeToggle />
        </div>
        
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
