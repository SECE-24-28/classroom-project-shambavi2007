import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../context/UserContext';
import PlanCard from './PlanCard';

const RechargePlans = ({ showPlans }) => {
  const { isDark } = useTheme();
  const { updateUser } = useUser();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const plans = [
    { id: 1, price: 199, validity: 28, data: '1.5GB/day', calls: 'Unlimited', sms: '100/day' },
    { id: 2, price: 399, validity: 56, data: '2GB/day', calls: 'Unlimited', sms: '100/day' },
    { id: 3, price: 599, validity: 84, data: '2GB/day', calls: 'Unlimited', sms: '100/day' },
    { id: 4, price: 149, validity: 24, data: '1GB/day', calls: 'Unlimited', sms: '100/day' },
    { id: 5, price: 299, validity: 28, data: '2GB/day', calls: 'Unlimited', sms: '100/day' },
    { id: 6, price: 799, validity: 90, data: '2GB/day', calls: 'Unlimited', sms: '100/day' }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    updateUser({ selectedPlan: plan });
  };

  const handleRecharge = () => {
    if (selectedPlan) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  if (!showPlans) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className={`text-3xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        Choose Your Plan
      </h2>
      
      {showSuccess && (
        <div className="max-w-md mx-auto mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <p className="font-semibold">Recharge Successful!</p>
          <p>Plan: ₹{selectedPlan.price} - {selectedPlan.validity} days</p>
        </div>
      )}
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {plans.map(plan => (
          <PlanCard 
            key={plan.id} 
            plan={plan} 
            onSelect={handlePlanSelect}
          />
        ))}
      </div>
      
      {selectedPlan && (
        <div className="text-center">
          <button
            onClick={handleRecharge}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Recharge Now - ₹{selectedPlan.price}
          </button>
        </div>
      )}
    </div>
  );
};

export default RechargePlans;
