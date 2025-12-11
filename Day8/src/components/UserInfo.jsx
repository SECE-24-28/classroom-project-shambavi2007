import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';

const UserInfo = () => {
  const { isDark } = useTheme();
  const { user } = useUser();

  if (!user.name && !user.mobileNumber) {
    return null;
  }

  return (
    <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-blue-50'} mb-6`}>
      <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        User Information
      </h3>
      <div className="space-y-2">
        {user.name && (
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <span className="font-medium">Name:</span> {user.name}
          </p>
        )}
        {user.mobileNumber && (
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <span className="font-medium">Mobile:</span> {user.mobileNumber}
          </p>
        )}
        {user.selectedPlan && (
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <span className="font-medium">Selected Plan:</span> ₹{user.selectedPlan.price} - {user.selectedPlan.validity} days
          </p>
        )}
      </div>
    </div>
  );
};

export default UserInfo;