import { TarotCard, ReadingPosition, DrawnCard } from '../types/cards';

export class TarotEngine {
  private cards: TarotCard[];
  private drawnCards: DrawnCard[];

  constructor(cards: TarotCard[]) {
    this.cards = [...cards];
    this.drawnCards = [];
  }

  private shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  private drawCard(position: ReadingPosition): DrawnCard | null {
    if (this.cards.length === 0) return null;
    const card = this.cards.pop();
    if (!card) return null;
    
    const drawnCard: DrawnCard = {
      ...card,
      position
    };
    
    this.drawnCards.push(drawnCard);
    return drawnCard;
  }

  private drawSpecificType(type: 'majorArcana' | 'minorArcana', position: ReadingPosition): DrawnCard | null {
    const cardIndex = this.cards.findIndex(card => card.type === type);
    if (cardIndex === -1) return null;
    
    const card = this.cards.splice(cardIndex, 1)[0];
    const drawnCard: DrawnCard = {
      ...card,
      position
    };
    
    this.drawnCards.push(drawnCard);
    return drawnCard;
  }

  public performReading(positions: ReadingPosition[], requirements: ('majorArcana' | 'minorArcana' | 'any')[]): DrawnCard[] {
    this.drawnCards = [];
    this.shuffle();

    return positions.map((position, index) => {
      const requirement = requirements[index];
      
      if (requirement === 'majorArcana' || requirement === 'minorArcana') {
        return this.drawSpecificType(requirement, position);
      }
      
      return this.drawCard(position);
    }).filter((card): card is DrawnCard => card !== null);
  }

  public reset(): void {
    this.cards = [...this.cards, ...this.drawnCards];
    this.drawnCards = [];
  }
}