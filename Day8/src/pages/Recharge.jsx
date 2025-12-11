import { useState } from 'react';
import RechargeForm from '../components/RechargeForm';
import RechargePlans from '../components/RechargePlans';
import UserInfo from '../components/UserInfo';

const Recharge = () => {
  const [showPlans, setShowPlans] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <UserInfo />
      <RechargeForm onShowPlans={setShowPlans} />
      <RechargePlans showPlans={showPlans} />
    </div>
  );
};

export default Recharge;