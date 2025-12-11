import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';

const PlanCard = ({ plan, onSelect }) => {
  const { isDark } = useTheme();
  const { user } = useUser();

  return (
    <div className={`p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${
      isDark 
        ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
        : 'bg-white border-gray-200 hover:border-blue-500 shadow-lg'
    } ${user.selectedPlan?.id === plan.id ? 'border-blue-500 ring-2 ring-blue-200' : ''}`}
      onClick={() => onSelect(plan)}
    >
      <div className="text-center">
        <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
          ₹{plan.price}
        </h3>
        <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {plan.validity} days validity
        </p>
        <div className="space-y-2 mb-4">
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Data: {plan.data}
          </p>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Calls: {plan.calls}
          </p>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            SMS: {plan.sms}
          </p>
        </div>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
          Select Plan
        </button>
      </div>
    </div>
  );
};

export default PlanCard;