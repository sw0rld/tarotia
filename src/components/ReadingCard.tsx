import React from 'react';
import { motion } from 'framer-motion';
import { TarotCard } from '../types/cards';

interface ReadingCardProps {
  card: TarotCard;
  position?: string;
}

const ReadingCard: React.FC<ReadingCardProps> = ({ card, position }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-gray-800 rounded-lg shadow-xl p-6 flex gap-6"
    >
      <div className="w-1/3">
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="w-2/3 space-y-4">
        {position && (
          <p className="text-purple-400 text-lg font-medium">{position}</p>
        )}
        <h3 className="text-2xl font-bold text-white">{card.name}</h3>
        <p className="text-gray-300">{card.description}</p>
        <div className="pt-4 border-t border-gray-700">
          <p className="text-green-400 mb-2">{card.positiveReading}</p>
          <p className="text-red-400">{card.negativeReading}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReadingCard;