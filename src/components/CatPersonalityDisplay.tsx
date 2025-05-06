import React from 'react';
import { motion } from 'framer-motion';
import { CatPersonality } from '../types/CatPersonality';

interface CatPersonalityDisplayProps {
  personality: CatPersonality;
}

export default function CatPersonalityDisplay({ personality }: CatPersonalityDisplayProps) {
  const traitBars = Object.entries(personality.traits).map(([trait, value]) => (
    <div key={trait} className="mb-2">
      <div className="flex justify-between text-sm mb-1">
        <span className="capitalize">{trait}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 bg-cat-surface rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-cat-primary"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  ));

  return (
    <div className="bg-cat-surface p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-4 text-center">{personality.name}'s Personality</h3>
      <div className="mb-4">
        {traitBars}
      </div>
      <div className="text-sm">
        <h4 className="font-semibold mb-2">Interests:</h4>
        <div className="flex flex-wrap gap-2">
          {personality.interests.map((interest) => (
            <span
              key={interest}
              className="px-2 py-1 bg-cat-primary bg-opacity-20 rounded-full text-xs"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 