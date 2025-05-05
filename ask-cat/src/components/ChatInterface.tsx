import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import CatAvatar from './CatAvatar';

interface Message {
  text: string;
  isUser: boolean;
}

export default function ChatInterface() {
  const [currentMessage, setCurrentMessage] = useState<Message | null>(null);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setCurrentMessage(userMessage);
    setInput('');
    setIsTyping(true);

    // Simulate cat response
    setTimeout(() => {
      const catResponse = {
        text: "Meow! That's an interesting question. Let me think about it...",
        isUser: false
      };
      setCurrentMessage(catResponse);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {/* User message - top right */}
      <AnimatePresence mode="wait">
        {currentMessage?.isUser && (
          <motion.div
            key="user-message"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 50 }}
            className="absolute top-4 right-4 max-w-[180px]"
          >
            <div className="chat-message user-message">
              <p className="text-sm leading-tight">{currentMessage.text}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cat response - centered */}
      <AnimatePresence mode="wait">
        {currentMessage?.isUser === false && (
          <motion.div
            key="cat-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-sm"
          >
            <div className="chat-message cat-message">
              <CatAvatar isTyping={false} />
              <p className="text-center mt-2 text-sm leading-relaxed px-2">{currentMessage.text}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Typing indicator */}
      <AnimatePresence>
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="chat-message cat-message">
              <CatAvatar isTyping={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input form */}
      <form onSubmit={handleSubmit} className="input-container">
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about cats..."
              className="chat-input pr-12 text-sm"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:scale-110 transition-transform"
              style={{ color: 'var(--color-cat-primary)' }}
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
} 