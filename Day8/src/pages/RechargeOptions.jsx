import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const RechargeOptions = () => {
  const { isDark } = useTheme();

  const options = [
    {
      id: 1,
      title: 'Mobile Prepaid',
      description: 'Recharge your prepaid mobile instantly',
      icon: '📱',
      link: '/recharge'
    },
    {
      id: 2,
      title: 'Mobile Postpaid',
      description: 'Pay your postpaid mobile bills',
      icon: '📞',
      link: '/recharge'
    },
    {
      id: 3,
      title: 'DTH Recharge',
      description: 'Recharge your DTH connection',
      icon: '📺',
      link: '/recharge'
    },
    {
      id: 4,
      title: 'Data Card',
      description: 'Recharge your data card',
      icon: '💳',
      link: '/recharge'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
          Recharge Options
        </h1>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Choose your recharge type
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {options.map(option => (
          <Link
            key={option.id}
            to={option.link}
            className={`p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
              isDark 
                ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                : 'bg-white hover:shadow-lg border border-gray-200'
            }`}
          >
            <div className="text-4xl mb-4">{option.icon}</div>
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              {option.title}
            </h3>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {option.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RechargeOptions;