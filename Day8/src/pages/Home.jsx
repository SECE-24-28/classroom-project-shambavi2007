import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { isDark } = useTheme();

  return (
    <div>
      {/* Hero Section */}
      <section className={`py-20 px-4 text-center ${isDark ? 'bg-gray-900' : 'bg-gradient-to-r from-blue-500 to-purple-600'}`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quick Mobile Recharge
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Recharge your mobile instantly with the best plans and offers
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <span className="text-white font-semibold">Fast & Secure</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <span className="text-white font-semibold">Best Offers</span>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Quick & Easy Mobile Recharge
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Recharge your mobile with best offers and instant processing
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className={`p-6 rounded-lg text-center ${isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Instant Recharge
            </h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Get instant recharge with 100% success rate
            </p>
          </div>
          
          <div className={`p-6 rounded-lg text-center ${isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔒</span>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Secure Payment
            </h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Safe and secure payment gateway
            </p>
          </div>
          
          <div className={`p-6 rounded-lg text-center ${isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">💰</span>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Best Offers
            </h3>
            <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
              Get cashback and exclusive offers
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/recharge-options" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Start Recharge
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;