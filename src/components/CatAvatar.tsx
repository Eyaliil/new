import React from 'react';
import { motion } from 'framer-motion';

interface CatAvatarProps {
  isTyping?: boolean;
}

export default function CatAvatar({ isTyping = false }: CatAvatarProps) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <motion.div
        className="w-12 h-12 bg-cat-secondary rounded-full flex items-center justify-center"
        animate={{
          scale: isTyping ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 1,
          repeat: isTyping ? Infinity : 0,
          ease: "easeInOut"
        }}
      >
        <motion.div
          className="text-2xl"
          animate={{
            rotate: isTyping ? [0, 10, -10, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            repeat: isTyping ? Infinity : 0,
            ease: "easeInOut"
          }}
        >
          😺
        </motion.div>
      </motion.div>
      {isTyping && (
        <motion.div
          className="flex gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-2 h-2 bg-cat-primary rounded-full"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: 0,
            }}
          />
          <motion.div
            className="w-2 h-2 bg-cat-primary rounded-full"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: 0.2,
            }}
          />
          <motion.div
            className="w-2 h-2 bg-cat-primary rounded-full"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: 0.4,
            }}
          />
        </motion.div>
      )}
    </div>
  );
} 