import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();

  return (
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
  );
};

export default Hero;