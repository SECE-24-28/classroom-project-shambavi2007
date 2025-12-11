import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';

const Login = () => {
  const { isDark } = useTheme();
  const { updateUser } = useUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name: formData.email.split('@')[0] });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className={`max-w-md w-full space-y-8 p-8 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
        <div className="text-center">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Sign In
          </h2>
          <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Access your recharge account
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'
              }`}
              required
            />
          </div>
          
          <div>
            <label className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300'
              }`}
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Sign In
          </button>
        </form>
        
        <div className="text-center">
          <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;