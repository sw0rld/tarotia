import React from 'react';
import { motion } from 'framer-motion';
import CardSpread from '../../components/CardSpread';
import ReadingCard from '../../components/ReadingCard';
import { useReading } from '../../hooks/useReading';
import { starSpreadPositions } from '../../data/readingPositions';

const StarSpread = () => {
  const requirements = [
    'majorArcana', 'any', 'any', 'any',
    'majorArcana', 'any', 'majorArcana'
  ] as const;

  const {
    drawnCards,
    isComplete,
    drawCard,
    resetReading,
    totalCards,
    remainingCards
  } = useReading(starSpreadPositions, requirements);

  const handleCardClick = () => {
    const audio = new Audio('/sounds/card-flip.mp3');
    audio.play().catch(() => {});
    drawCard();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.h2
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Star Spread Reading
      </motion.h2>

      <CardSpread
        totalCards={totalCards}
        selectedCards={drawnCards.length}
        onCardClick={handleCardClick}
        spreadType="star"
      />

      <div className="mt-8 space-y-6">
        {drawnCards.map((card, index) => (
          <ReadingCard key={index} card={card} />
        ))}
      </div>

      {isComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-8 right-8"
        >
          <button
            onClick={resetReading}
            className="px-6 py-3 bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
          >
            New Reading
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default StarSpread;