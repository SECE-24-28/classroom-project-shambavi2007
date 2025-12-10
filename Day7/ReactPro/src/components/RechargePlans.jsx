import { useState } from 'react';
import RechargeCard from './RechargeCard';

const RechargePlans = () => {
  const [plans] = useState([
    { amount: 199, validity: "28 Days", data: "1GB" },
    { amount: 399, validity: "56 Days", data: "1.5GB" },
    { amount: 599, validity: "84 Days", data: "2GB" }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Available Recharge Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <RechargeCard
            key={index}
            amount={plan.amount}
            validity={plan.validity}
            data={plan.data}
          />
        ))}
      </div>
    </div>
  );
};

export default RechargePlans;
