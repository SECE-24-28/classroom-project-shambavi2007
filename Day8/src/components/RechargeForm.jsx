import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';

const RechargeForm = ({ onShowPlans }) => {
  const { isDark } = useTheme();
  const { user, updateUser } = useUser();
  const [formData, setFormData] = useState({
    name: user.name || '',
    mobileNumber: user.mobileNumber || '',
    operator: '',
    amount: user.rechargeAmount || '',
    type: 'prepaid'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({
      name: formData.name,
      mobileNumber: formData.mobileNumber,
      rechargeAmount: formData.amount
    });
    onShowPlans(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className={`max-w-md mx-auto rounded-lg shadow-lg p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <h2 className={`text-2xl font-bold text-center mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Mobile Recharge
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block mb-2 font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark 
                  ? 'border-gray-600 bg-gray-700 text-white' 
                  : 'border-gray-300 bg-white text-gray-800'
              }`}
              required
            />
          </div>
          <div>
            <label className={`block mb-2 font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Phone Number
            </label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter 10-digit number"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark 
                  ? 'border-gray-600 bg-gray-700 text-white' 
                  : 'border-gray-300 bg-white text-gray-800'
              }`}
              required
              pattern="[0-9]{10}"
            />
          </div>
          <div>
            <label className={`block mb-2 font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Type
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="prepaid"
                  checked={formData.type === 'prepaid'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Prepaid</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value="postpaid"
                  checked={formData.type === 'postpaid'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Postpaid</span>
              </label>
            </div>
          </div>
          <div>
            <label className={`block mb-2 font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Operator
            </label>
            <select
              name="operator"
              value={formData.operator}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark 
                  ? 'border-gray-600 bg-gray-700 text-white' 
                  : 'border-gray-300 bg-white text-gray-800'
              }`}
              required
            >
              <option value="">Select Operator</option>
              <option value="Airtel">Airtel</option>
              <option value="Jio">Jio</option>
              <option value="Vi">Vi</option>
              <option value="BSNL">BSNL</option>
            </select>
          </div>
          <div>
            <label className={`block mb-2 font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Amount (₹)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter amount"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark 
                  ? 'border-gray-600 bg-gray-700 text-white' 
                  : 'border-gray-300 bg-white text-gray-800'
              }`}
              min="10"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            View Plans
          </button>
        </form>
      </div>
    </div>
  );
};

export default RechargeForm;
