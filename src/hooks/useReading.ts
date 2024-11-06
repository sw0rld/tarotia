import { useState, useCallback } from 'react';
import { TarotCard } from '../types/cards';
import { getRandomCard } from '../data/cards';

type CardRequirement = 'majorArcana' | 'minorArcana' | 'any';

export const useReading = (positions: string[], requirements: readonly CardRequirement[]) => {
  const [drawnCards, setDrawnCards] = useState<Array<TarotCard & { position: string }>>([]);

  const drawCard = useCallback(() => {
    if (drawnCards.length >= positions.length) return;

    const currentPosition = positions[drawnCards.length];
    const requirement = requirements[drawnCards.length];
    
    let newCard: TarotCard;
    do {
      newCard = getRandomCard();
    } while (
      (requirement !== 'any' && newCard.type !== requirement) ||
      drawnCards.some(card => card.id === newCard.id)
    );

    setDrawnCards(prev => [...prev, { ...newCard, position: currentPosition }]);
  }, [drawnCards, positions, requirements]);

  const resetReading = useCallback(() => {
    setDrawnCards([]);
  }, []);

  return {
    drawnCards,
    isComplete: drawnCards.length === positions.length,
    drawCard,
    resetReading,
    totalCards: positions.length,
    remainingCards: positions.length - drawnCards.length
  };
};

export default useReading;