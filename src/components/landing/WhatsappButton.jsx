import React from 'react';
import { motion } from 'framer-motion';

const WhatsappIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.4,16.1c-0.4-0.2-2.5-1.2-2.9-1.4c-0.4-0.1-0.7-0.2-1,0.2c-0.3,0.4-1.1,1.4-1.3,1.6c-0.3,0.3-0.5,0.3-0.9,0.1c-0.4-0.2-1.8-0.7-3.4-2.1c-1.2-1.1-2.1-2.4-2.3-2.8c-0.2-0.4,0-0.7,0.2-0.9c0.2-0.2,0.4-0.5,0.6-0.7c0.2-0.2,0.3-0.4,0.4-0.7c0.1-0.3,0.1-0.5,0-0.7C7.2,8.3,6.6,6.8,6.4,6.2c-0.2-0.5-0.5-0.5-0.7-0.5H5.2C4.9,5.7,4.5,5.8,4.2,6.1c-0.3,0.3-1.1,1.1-1.1,2.7c0,1.6,1.2,3.1,1.3,3.3c0.2,0.2,2.5,3.8,6.1,5.4c3.6,1.6,3.6,1.1,4.2,1c0.6-0.1,2.5-1,2.8-2c0.4-1,0.4-1.8,0.3-2C19.1,16.5,18.8,16.3,18.4,16.1z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c5.5,0,10-4.5,10-10S17.5,2,12,2z M12,21.2c-5.1,0-9.2-4.1-9.2-9.2S6.9,2.8,12,2.8s9.2,4.1,9.2,9.2S17.1,21.2,12,21.2z"
    />
  </svg>
);

const WhatsappButton = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <WhatsappIcon />
    </motion.button>
  );
};

export default WhatsappButton;