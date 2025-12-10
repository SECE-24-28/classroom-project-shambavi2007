const RechargeCard = ({ amount, validity, data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          ₹{amount}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-1">
          Validity: <span className="font-semibold">{validity}</span>
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Data: <span className="font-semibold">{data}/Day</span>
        </p>
        <button className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition">
          Recharge
        </button>
      </div>
    </div>
  );
};

export default RechargeCard;
