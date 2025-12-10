import Navbar from './components/Navbar';
import RechargeForm from './components/RechargeForm';
import RechargePlans from './components/RechargePlans';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <Navbar />
      <RechargeForm />
      <RechargePlans />
    </div>
  );
}

export default App;
