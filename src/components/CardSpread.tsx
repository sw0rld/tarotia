import React from 'react';
import { motion } from 'framer-motion';

interface CardSpreadProps {
  totalCards: number;
  selectedCards: number;
  onCardClick: () => void;
  spreadType: 'celtic' | 'star' | 'love' | 'time' | 'yesno';
  remainingCards: number;
}

const CardSpread: React.FC<CardSpreadProps> = ({
  totalCards,
  selectedCards,
  onCardClick,
  spreadType,
  remainingCards
}) => {
  const getSpreadLayout = () => {
    switch (spreadType) {
      case 'celtic':
        return 'grid grid-cols-5 gap-4';
      case 'star':
        return 'grid grid-cols-7 gap-4';
      case 'love':
        return 'grid grid-cols-5 gap-4';
      case 'time':
        return 'grid grid-cols-3 gap-4';
      case 'yesno':
        return 'flex justify-center';
      default:
        return 'flex flex-wrap gap-4';
    }
  };

  return (
    <div className="relative">
      <div className={`${getSpreadLayout()} items-center justify-center`}>
        {Array.from({ length: totalCards }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: index >= selectedCards ? 1 : 0,
              scale: index >= selectedCards ? 1 : 0.8,
              filter: index >= selectedCards ? 'brightness(1)' : 'brightness(0.5)'
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={index >= selectedCards ? { 
              scale: 1.05,
              filter: 'brightness(1.2)',
              transition: { duration: 0.2 }
            } : {}}
            className="relative cursor-pointer"
            onClick={index >= selectedCards ? onCardClick : undefined}
          >
            <img
              src={`/cards/${spreadType}-back.svg`}
              alt="Card Back"
              className="w-32 h-48 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 ml-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="text-center">
          <p className="text-gray-400 mb-2">Cards Remaining</p>
          <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center border-2 border-purple-500">
            <span className="text-2xl font-bold text-white">{remainingCards}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CardSpread;