import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`py-8 px-4 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Mobile Recharge</h3>
            <p className="text-gray-300">Quick and secure mobile recharge with best offers.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Prepaid Recharge</li>
              <li>Postpaid Bills</li>
              <li>Special Offers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Mobile Recharge App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;