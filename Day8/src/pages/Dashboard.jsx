import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';

const Dashboard = () => {
  const { isDark } = useTheme();
  const { user } = useUser();

  const recentRecharges = [
    { id: 1, amount: 199, date: '2024-01-15', status: 'Success' },
    { id: 2, amount: 399, date: '2024-01-10', status: 'Success' },
    { id: 3, amount: 149, date: '2024-01-05', status: 'Success' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Welcome, {user.name || 'User'}!
        </h1>
        <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
          Manage your mobile recharges and account
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
          <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Quick Recharge
          </h3>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Recharge your mobile instantly
          </p>
          <Link 
            to="/recharge"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Recharge Now
          </Link>
        </div>

        <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
          <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Account Balance
          </h3>
          <p className={`text-2xl font-bold mb-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
            ₹1,250
          </p>
          <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            Available balance
          </p>
        </div>

        <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
          <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Total Recharges
          </h3>
          <p className={`text-2xl font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            24
          </p>
          <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            This month
          </p>
        </div>
      </div>

      <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
        <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Recent Recharges
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <th className={`text-left py-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Amount</th>
                <th className={`text-left py-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Date</th>
                <th className={`text-left py-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentRecharges.map(recharge => (
                <tr key={recharge.id} className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className={`py-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>₹{recharge.amount}</td>
                  <td className={`py-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{recharge.date}</td>
                  <td className="py-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                      {recharge.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;