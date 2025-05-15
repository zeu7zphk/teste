import { motion } from 'motion/react';

const LoadingBar = () => {
  return (
    <div className="w-full h-5 bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className="bg-gray-400 h-full"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 4, ease: 'anticipate' }}
      ></motion.div>
    </div>
  );
};

export default LoadingBar;
