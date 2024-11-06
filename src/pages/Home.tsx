import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cross, 
  Star, 
  Heart, 
  Clock, 
  HelpCircle,
  MessageCircle,
  MessagesSquare
} from 'lucide-react';

const readings = [
  { 
    path: '/celtic-cross',
    name: 'Celtic Cross',
    icon: Cross,
    cards: 10
  },
  {
    path: '/star-spread',
    name: 'Star Spread',
    icon: Star,
    cards: 7
  },
  {
    path: '/love-reading',
    name: 'Love Reading',
    icon: Heart,
    cards: 5
  },
  {
    path: '/time-reading',
    name: 'Time Reading',
    icon: Clock,
    cards: 3
  },
  {
    path: '/yes-no',
    name: 'Yes or No',
    icon: HelpCircle,
    cards: 1
  },
  {
    path: '/specific-question',
    name: 'Specific Question',
    icon: MessageCircle,
    disabled: true
  },
  {
    path: '/chat',
    name: 'Chat with TarotiA',
    icon: MessagesSquare,
    disabled: true
  }
];

const Home = () => {
  const playSound = () => {
    const audio = new Audio('/sounds/card-select.mp3');
    audio.play().catch(() => {});
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="text-center mb-12">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          TarotiA
        </motion.h1>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-24 mx-auto mb-8"
        >
          <img
            src="/logo.svg"
            alt="TarotiA Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {readings.map((reading, index) => (
          <motion.div
            key={reading.path}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {reading.disabled ? (
              <div className="relative group">
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 opacity-50 cursor-not-allowed">
                  <reading.icon className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <h2 className="text-lg font-semibold text-center">{reading.name}</h2>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm text-gray-300">Coming Soon</span>
                </div>
              </div>
            ) : (
              <Link
                to={reading.path}
                onClick={playSound}
                className="block bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all transform hover:scale-105 hover:shadow-xl"
              >
                <reading.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h2 className="text-lg font-semibold text-center">{reading.name}</h2>
                {reading.cards && (
                  <p className="text-sm text-gray-400 text-center mt-2">
                    {reading.cards} cards
                  </p>
                )}
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;